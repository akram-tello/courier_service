import { getBaseDeliveryCostAndPackages } from './src/utils/inputHandler.js';
import { calculateDeliveryCost } from './src/services/deliveryCostCalculator.js';
import chalk from 'chalk';

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

  console.log(chalk.green('-----------------------------------------------'));
}


processPackages().catch(err => console.error(chalk.red(err.message)));
