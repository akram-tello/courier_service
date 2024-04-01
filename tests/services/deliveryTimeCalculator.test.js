import { DeliveryTimeCalculator } from '../../src/services/deliveryTimeCalculator.js';

describe('Delivery Time Calculator', () => {
    const vehicleInfo = { noOfVehicles: 2, maxSpeed: 70, maxCarriableWeight: 200 };

    test('ensures correct sorting by weight and secondary by distance', () => {
        const packages = [
            { id: 'PKG1', weight: 100, distance: 100, offerCode: '' },
            { id: 'PKG2', weight: 100, distance: 200, offerCode: '' },
            { id: 'PKG3', weight: 50, distance: 150, offerCode: '' },
        ];
        const calculator = new DeliveryTimeCalculator(packages, vehicleInfo);
        const results = calculator.calculate();
        expect(results.findIndex(r => r.pkg_id === 'PKG2')).toBeGreaterThan(results.findIndex(r => r.pkg_id === 'PKG1'));
        expect(results.findIndex(r => r.pkg_id === 'PKG3')).toBeGreaterThan(results.findIndex(r => r.pkg_id === 'PKG1'));
    });

    test('verifies delivery time calculation accuracy', () => {
        const packages = [
            { id: 'PKG4', weight: 50, distance: 70, offerCode: '' }, // 1 hour travel time
        ];
        const calculator = new DeliveryTimeCalculator(packages, vehicleInfo);
        const results = calculator.calculate();
        // Considering round trip, total travel time should be 2 hours, formatted as string
        expect(results.find(r => r.pkg_id === 'PKG4').estimated_delivery_time).toBe('2.00');
    });

    test('handles packages exceeding vehicle capacity efficiently', () => {
        const heavyPackages = [
            { id: 'PKG5', weight: 150, distance: 100, offerCode: '' },
            { id: 'PKG6', weight: 150, distance: 200, offerCode: '' },
            // Assuming maxCarriableWeight is such that only one package can be delivered at a time
        ];
        const calculator = new DeliveryTimeCalculator(heavyPackages, vehicleInfo);
        const results = calculator.calculate();
        // Ensure that the delivery times account for vehicle capacity limits
        expect(results.length).toBe(2);
        expect(parseFloat(results[1].estimated_delivery_time)).toBeGreaterThan(parseFloat(results[0].estimated_delivery_time));
    });

    test('consistently handles identical packages', () => {
        const identicalPackages = [
            { id: 'PKG7', weight: 100, distance: 100, offerCode: '' },
            { id: 'PKG8', weight: 100, distance: 100, offerCode: '' },
        ];
        const calculator = new DeliveryTimeCalculator(identicalPackages, vehicleInfo);
        const results = calculator.calculate();
        expect(results[0].pkg_id).not.toBe(results[1].pkg_id); // Simple check to ensure they are processed separately
    });
});

