import { isOfferCodeValid } from '../../src/services/offerService.js';

describe('isOfferCodeValid', () => {
  test('validates existent offer code', () => {
    expect(isOfferCodeValid('OFR001')).toBe(true);
  });

  test('validates non-existent offer code', () => {
    expect(isOfferCodeValid('NON_EXISTENT')).toBe(false);
  });
});
