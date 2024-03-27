export class DeliveryTimeCalculator {
    constructor(packages, vehicleInfo) {
        this.packages = packages; 
        this.vehicleInfo = vehicleInfo; // { noOfVehicles, maxSpeed, maxCarriableWeight }
    }

    calculate() {
        // Sort packages by weight descendingly to prioritize heavier packages for delivery
        const sortedPackages = this.packages.sort((a, b) => b.weight - a.weight || b.distance - a.distance);

        const deliveryTimes = [];
        const vehicleAvailability = new Array(this.vehicleInfo.noOfVehicles).fill(0); // Track when each vehicle will be available next

        sortedPackages.forEach(pkg => {
            const earliestAvailableVehicleIndex = vehicleAvailability.indexOf(Math.min(...vehicleAvailability));
            const travelTime = pkg.distance / this.vehicleInfo.maxSpeed;
            const totalTime = vehicleAvailability[earliestAvailableVehicleIndex] + travelTime * 2; // Considering round trip

            vehicleAvailability[earliestAvailableVehicleIndex] = totalTime; // Update vehicle's next available time

            deliveryTimes.push({
                pkg_id: pkg.id,
                estimated_delivery_time: totalTime.toFixed(2),
            });
        });

        return deliveryTimes;
    }
}
