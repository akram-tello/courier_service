import inquirer from 'inquirer';
import chalk from 'chalk';

export async function getBaseDeliveryCostAndPackages() {
  console.log(chalk.blue("\nWelcome to Kiki's Courier Service Delivery Cost Estimator!"));

  const { baseDeliveryCost } = await inquirer.prompt({
    type: 'input',
    name: 'baseDeliveryCost',
    message: 'Enter base delivery cost ($):',
    validate: input => !isNaN(parseFloat(input)) || 'Please enter a valid number.'
  });

  const { noOfPackages } = await inquirer.prompt({
    type: 'input',
    name: 'noOfPackages',
    message: 'Enter number of packages to deliver:',
    validate: input => !isNaN(parseInt(input, 10)) || 'Please enter a valid integer.'
  });

  const packages = [];
  for (let i = 0; i < noOfPackages; i++) {
    console.log(chalk.yellow(`\nEnter details for package ${i + 1}:`));
    const responses = await inquirer.prompt([
      {
        type: 'input',
        name: 'id',
        message: 'Package ID:',
        validate: input => input.trim() !== '' || 'Package ID cannot be empty.'
      },
      {
        type: 'input',
        name: 'weight',
        message: 'Weight in KG:',
        validate: input => !isNaN(parseFloat(input)) || 'Please enter a valid number.'
      },
      {
        type: 'input',
        name: 'distance',
        message: 'Distance in KM:',
        validate: input => !isNaN(parseFloat(input)) || 'Please enter a valid number.'
      },
      {
        type: 'input',
        name: 'offerCode',
        message: 'Offer Code (Optional):',
        default: '',
      }
    ]);
    packages.push([responses.id, responses.weight, responses.distance, responses.offerCode]);
  }

  return { baseDeliveryCost: parseFloat(baseDeliveryCost), packages };
}

