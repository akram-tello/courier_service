// Import necessary modules and classes
import { DeliveryTimeCalculator } from '../../src/services/deliveryTimeCalculator.js';
import { describe, it, expect } from '@jest/globals';

describe('DeliveryTimeCalculator', () => {
    it('accurately calculates delivery times with optimized vehicle loading', () => {
        const packages = [
            { id: 'PKG1', weight: 50, distance: 30, offerCode: 'OFR001' },
            { id: 'PKG2', weight: 75, distance: 125, offerCode: 'OFR008' },
            { id: 'PKG3', weight: 175, distance: 100, offerCode: 'OFR003' },
            { id: 'PKG4', weight: 110, distance: 60, offerCode: 'OFR002' },
            { id: 'PKG5', weight: 155, distance: 95, offerCode: 'NA' }
        ];
        const vehicleInfo = { noOfVehicles: 2, maxSpeed: 70, maxCarriableWeight: 200 };
        const calculator = new DeliveryTimeCalculator(packages, vehicleInfo);

        const results = calculator.calculate();
        const expectedResults = [
            { pkg_id: 'PKG1', estimated_delivery_time: 3.98 },
            { pkg_id: 'PKG2', estimated_delivery_time: 1.78 },
            { pkg_id: 'PKG3', estimated_delivery_time: 1.42 },
            { pkg_id: 'PKG4', estimated_delivery_time: 0.85 },
            { pkg_id: 'PKG5', estimated_delivery_time: 4.19 }
        ];

        expectedResults.forEach(expected => {
            const result = results.find(r => r.pkg_id === expected.pkg_id);
            expect(result).not.toBeNull();
            expect(parseFloat(result.estimated_delivery_time)).toBeCloseTo(expected.estimated_delivery_time);
        });
    });
});