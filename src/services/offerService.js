async function loadOffersConfig() {
  const offers = await import('../../config/offers.json', {
      assert: { type: 'json' }
  });
  return offers.default;
}

// Adapting isOfferCodeValid to be asynchronous
async function isOfferCodeValid(offerCode) {
  const OFFERS = await loadOffersConfig();
  return !!OFFERS[offerCode];
}

export { isOfferCodeValid };