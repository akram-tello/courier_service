import inquirer from 'inquirer';
import chalk from 'chalk';
import { getBaseDeliveryCostAndPackages, getVehicleInfo } from './src/utils/inputHandler.js';
import { calculateDeliveryCost } from './src/services/offerService.js';
import { DeliveryTimeCalculator } from './src/services/deliveryTimeCalculator.js';

async function mainMenu() {
  console.log(chalk.blue("\nWelcome to Kiki's Courier Service!"));
  const { choice } = await inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: 'Select an operation:',
    choices: ['Delivery Cost Estimation', 'Estimated Delivery Time', 'Exit'],
  });

  switch (choice) {
    case 'Delivery Cost Estimation':
      await processPackages();
      break;
    case 'Estimated Delivery Time':
      await processDeliveryTime();
      break;
    case 'Exit':
      console.log(chalk.green('Thank you for using Courier Service CLI.'));
      break;
  }
}

async function processPackages() {
  const { baseDeliveryCost, packages } = await getBaseDeliveryCostAndPackages();
  console.log(chalk.green('\nCalculated Delivery Costs:'));
  console.log(chalk.green('-----------------------------------------------'));
  console.log(chalk.green('| ID    | Discount ($) | Total Cost ($)       |'));
  console.log(chalk.green('-----------------------------------------------'));

  packages.forEach(([id, weightStr, distanceStr, offerCode]) => {
      // Convert string inputs to appropriate types
      const weight = parseFloat(weightStr);
      const distance = parseFloat(distanceStr);

      // Ensure the 'weight' and 'distance' variables are correctly defined and passed
      const { totalCost, discount, message } = calculateDeliveryCost(baseDeliveryCost, weight, distance, offerCode);

      console.log(chalk.green(`| ${id.padEnd(4)} | ${discount.toFixed(2).padStart(11)} | ${totalCost.toFixed(2).padStart(20)} |`));
      if (message) {
          console.log(chalk.yellow(message)); // Display any specific message regarding offer code
      }
    });
}

async function processDeliveryTime() {
  const { baseDeliveryCost, packages } = await getBaseDeliveryCostAndPackages();
  const vehicleInfo = await getVehicleInfo();
  const results = DeliveryTimeCalculator({ baseDeliveryCost, packages, vehicleInfo });

  console.log(chalk.green('\nEstimated Delivery Times:'));
  results.forEach(result => {
    console.log(`${result.pkg_id} ${result.discount} ${result.total_cost} ${result.estimated_delivery_time}`);
  });
}

mainMenu().catch(err => {
  console.error(chalk.red(`Error: ${err.message}`));
});
