// costEstimator CLI
import inquirer from 'inquirer';

function calculateDeliveryCostAndDiscount(baseDeliveryCost, weight, distance, offerCode) {
    let discount = 0; 
    let totalCost = baseDeliveryCost + (weight * 10) + (distance * 5) - discount;
    return { discount, totalCost };
}

async function collectPackageDetails() {
    const { baseDeliveryCost, noOfPackages } = await inquirer.prompt([
        { name: 'baseDeliveryCost', type: 'input', message: 'Enter base delivery cost:' },
        { name: 'noOfPackages', type: 'input', message: 'Enter number of packages:' },
    ]);

    let packages = [];
    for (let i = 0; i < noOfPackages; i++) {
        const pkg = await inquirer.prompt([
            { name: 'id', type: 'input', message: `Enter package ${i + 1} ID:` },
            { name: 'weight', type: 'input', message: `Enter package ${i + 1} weight (in kg):` },
            { name: 'distance', type: 'input', message: `Enter package ${i + 1} distance (in km):` },
            { name: 'offerCode', type: 'input', message: `Enter package ${i + 1} offer code (optional):` },
        ]);
        packages.push({ ...pkg, weight: parseInt(pkg.weight), distance: parseInt(pkg.distance) });
    }

    return { baseDeliveryCost: parseInt(baseDeliveryCost), packages };
}

async function calculateAndDisplayCosts() {
    const { baseDeliveryCost, packages } = await collectPackageDetails();

    console.log("pkg_id discount total_cost");
    packages.forEach(pkg => {
        const { discount, totalCost } = calculateDeliveryCostAndDiscount(baseDeliveryCost, pkg.weight, pkg.distance, pkg.offerCode);
        console.log(`${pkg.id} ${discount.toFixed(2)} ${totalCost.toFixed(2)}`);
    });
}

calculateAndDisplayCosts().catch(err => {
    console.error("An error occurred:", err);
});

export default calculateAndDisplayCosts;