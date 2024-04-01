import { calculateDeliveryCost } from '../../src/services/offerService.js';

describe('Offer Service', () => {
    describe('calculateDeliveryCost', () => {
        test('calculates delivery cost with offer code at maximum weight and distance limits', async () => {
            const result = await calculateDeliveryCost(100, 200, 200, 'OFR001'); 
            expect(result.totalCost).toBeLessThan(100 + (200 * 10) + (200 * 5)); // Verify discount applied
            expect(result.discount).toBeGreaterThan(0);
        });

        test('calculates delivery cost with offer code at minimum weight and distance limits', async () => {
            const result = await calculateDeliveryCost(100, 70, 0, 'OFR001');
            expect(result.totalCost).toBeLessThan(100 + (70 * 10) + (0 * 5)); // Verify discount applied
            expect(result.discount).toBeGreaterThan(0);
        });

        test('calculates delivery cost with weight and distance outside any offer criteria', async () => {
            const result = await calculateDeliveryCost(100, 10, 300, 'OFR003'); // Beyond the criteria of OFR003
            expect(result.discount).toBe(0); // No discount should apply
        });

        test('handles invalid offer code', async () => {
            const result = await calculateDeliveryCost(100, 50, 100, 'INVALID'); // Invalid offer code
            expect(result.totalCost).toBe(100 + (50 * 10) + (100 * 5)); // No discount applied
            expect(result.discount).toBe(0);
            expect(result.message).toMatch(/Invalid offer code/);
        });

        test('calculates delivery cost with partial criteria match (weight only)', async () => {
          // Assuming OFR002's criteria are not fully met by distance but met by weight
          const result = await calculateDeliveryCost(100, 150, 30, 'OFR002');
          expect(result.discount).toBe(0); // No discount should apply since criteria is partially met
          expect(result.totalCost).toBe(100 + (150 * 10) + (30 * 5));
      });

      test('calculates delivery cost with partial criteria match (distance only)', async () => {
          // Assuming OFR003's criteria are not fully met by weight but met by distance
          const result = await calculateDeliveryCost(100, 5, 200, 'OFR003');
          expect(result.discount).toBe(0); // No discount should apply since criteria is partially met
          expect(result.totalCost).toBe(100 + (5 * 10) + (200 * 5));
      });

      test('applies correct discount when exactly meeting offer criteria', async () => {
          // OFR001 criteria exactly met
          const result = await calculateDeliveryCost(100, 70, 200, 'OFR001');
          expect(result.totalCost).toBeLessThan(100 + (70 * 10) + (200 * 5)); // Verify discount applied
          expect(result.discount).toBeGreaterThan(0);
      });

      test('calculates delivery cost with zero values', async () => {
          // Test case for zero values
          const result = await calculateDeliveryCost(0, 0, 0, 'OFR001');
          expect(result.totalCost).toBe(0); // No cost should apply
          expect(result.discount).toBe(0); // No discount should apply
      });

      test('calculates delivery cost with negative values', async () => {
          const result = await calculateDeliveryCost(-100, -50, -100, 'OFR001');
          expect(result.totalCost).toBeNaN();
          expect(result.discount).toBeNaN();
          expect(result.message).toMatch(/Invalid numerical inputs/);
      });

      test('ensures offer code validity does not affect base calculation without offers', async () => {
          const result = await calculateDeliveryCost(100, 50, 25, 'OFR002'); // Assume OFR002 doesn't apply to this case
          expect(result.totalCost).toBe(100 + (50 * 10) + (25 * 5));
          expect(result.discount).toBe(0);
      });
        
    });
});