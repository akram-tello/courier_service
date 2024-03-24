import { calculateDeliveryCost, calculateDiscount } from '../../src/services/deliveryCostCalculator.js';

describe('calculateDeliveryCost', () => {
  test('calculates delivery cost without offer code', () => {
    const result = calculateDeliveryCost(100, 5, 100, '');
    expect(result.totalCost).toBe(750);
    expect(result.discount).toBe(0);
  });

  test('calculates delivery cost with valid offer code', () => {
    const result = calculateDeliveryCost(100, 75, 100, 'OFR001'); // Assuming OFR001 is valid for this case
    expect(result.discount).toBeGreaterThan(0);
  });

  test('handles invalid numerical inputs', () => {
    const result = calculateDeliveryCost(NaN, NaN, NaN, '');
    expect(result.totalCost).toBeNaN();
    expect(result.discount).toBeNaN();
  });
});

describe('calculateDiscount', () => {
  test('returns 0 discount for invalid offer code', () => {
    const discount = calculateDiscount(1000, 50, 100, 'INVALID_CODE');
    expect(discount).toBe(0);
  });

});
