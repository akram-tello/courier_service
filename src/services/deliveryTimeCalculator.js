export class DeliveryTimeCalculator {
    constructor(packages, vehicleInfo) {
        this.packages = packages;
        this.vehicleInfo = vehicleInfo;
    }

    calculate() {
        const sortedPackages = this.packages.sort((a, b) => b.weight - a.weight);
        let vehicleAvailability = new Array(this.vehicleInfo.noOfVehicles).fill(0);
        let deliveryTimes = [];

        sortedPackages.forEach(pkg => {
            let vehicleIndex = vehicleAvailability.findIndex(time => time <= vehicleAvailability.reduce((a, b) => Math.min(a, b)));
            let maxLoad = this.vehicleInfo.maxCarriableWeight;
            let load = 0;
            let farthestDistance = 0;

            for (let i = 0; i < sortedPackages.length && load + sortedPackages[i].weight <= maxLoad; i++) {
                if (!sortedPackages[i].assigned) {
                    load += sortedPackages[i].weight;
                    farthestDistance = Math.max(farthestDistance, sortedPackages[i].distance);
                    sortedPackages[i].assigned = true;
                    let travelTime = (farthestDistance / this.vehicleInfo.maxSpeed) * 2;
                    let deliveryTime = vehicleAvailability[vehicleIndex] + travelTime;
                    deliveryTimes.push({
                        pkg_id: sortedPackages[i].id,
                        estimated_delivery_time: parseFloat(deliveryTime.toFixed(2))
                    });
                }
            }
            vehicleAvailability[vehicleIndex] += (farthestDistance / this.vehicleInfo.maxSpeed) * 2;
        });

        return deliveryTimes.sort((a, b) => a.pkg_id.localeCompare(b.pkg_id));
    }
}
