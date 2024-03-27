import inquirer from 'inquirer';
import { DeliveryTimeCalculator } from './deliveryTimeCalculator.js';

async function collectInputs() {
    const { baseDeliveryCost, noOfPackages } = await inquirer.prompt([
        { name: 'baseDeliveryCost', type: 'input', message: 'Enter base delivery cost:' },
        { name: 'noOfPackages', type: 'input', message: 'Enter number of packages:' }
    ]);

    let packages = [];
    for (let i = 0; i < noOfPackages; i++) {
        const pkg = await inquirer.prompt([
            { name: 'id', type: 'input', message: `Enter package ${i + 1} ID:` },
            { name: 'weight', type: 'input', message: `Enter package ${i + 1} weight:` },
            { name: 'distance', type: 'input', message: `Enter package ${i + 1} distance:` },
            { name: 'offerCode', type: 'input', message: `Enter package ${i + 1} offer code:` }
        ]);
        packages.push({ ...pkg, weight: parseInt(pkg.weight), distance: parseInt(pkg.distance) });
    }

    const { noOfVehicles, maxSpeed, maxCarriableWeight } = await inquirer.prompt([
        { name: 'noOfVehicles', type: 'input', message: 'Enter number of vehicles:' },
        { name: 'maxSpeed', type: 'input', message: 'Enter max speed (km/hr):' },
        { name: 'maxCarriableWeight', type: 'input', message: 'Enter max carriable weight (kg):' }
    ]);

    return { baseDeliveryCost: parseInt(baseDeliveryCost), packages, vehicleInfo: { noOfVehicles: parseInt(noOfVehicles), maxSpeed: parseInt(maxSpeed), maxCarriableWeight: parseInt(maxCarriableWeight) } };
}

async function runDeliveryTimeEstimation() {
    const inputs = await collectInputs();
    const deliveryTimeCalculator = new DeliveryTimeCalculator(inputs.packages, inputs.vehicleInfo);
    const results = deliveryTimeCalculator.calculate();

    console.log("pkg_id estimated_delivery_time");
    results.forEach(result => {
        console.log(`${result.pkg_id} ${result.estimated_delivery_time}`);
    });
}

runDeliveryTimeEstimation().catch(err => {
    console.error("An error occurred:", err);
});
