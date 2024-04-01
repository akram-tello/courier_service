// Async function to dynamically load offers configuration
async function loadOffersConfig() {
  const offers = await import('../../config/offers.json', {
      assert: { type: 'json' }
  });
  return offers.default;
}

// Function to validate offer codes asynchronously
async function isOfferCodeValid(offerCode) {
  const OFFERS = await loadOffersConfig();
  return !!OFFERS[offerCode];
}

async function calculateDeliveryCost(baseDeliveryCost, weight, distance, offerCode) {
  // Check for invalid (negative) inputs
  if (baseDeliveryCost < 0 || weight < 0 || distance < 0) {
      return { totalCost: NaN, discount: NaN, message: "Error: Invalid numerical inputs." };
  }

  const baseCost = baseDeliveryCost + (weight * 10) + (distance * 5);
  let discount = 0;
  let message = '';

  const OFFERS = await loadOffersConfig();
  const isValidOfferCode = await isOfferCodeValid(offerCode);

  if (offerCode && !isValidOfferCode) {
      message = 'Invalid offer code. No discount applied.';
  } else {
      discount = calculateDiscount(baseCost, weight, distance, offerCode, OFFERS);
      if (offerCode && discount === 0) {
          message = 'Offer code is valid but does not apply to this package.';
      }
  }

  return { totalCost: baseCost - discount, discount, message };
}

function calculateDiscount(baseCost, weight, distance, offerCode, OFFERS) {
  if (!offerCode || !OFFERS[offerCode]) {
      return 0;
  }

  const offer = OFFERS[offerCode];
  const { discountPercent, distance: distanceCriteria, weight: weightCriteria } = offer;

  if (weight >= weightCriteria.min && weight <= weightCriteria.max &&
      distance >= distanceCriteria.min && distance <= distanceCriteria.max) {
      return (baseCost * discountPercent) / 100;
  }

  return 0;
}

export { isOfferCodeValid, calculateDeliveryCost, calculateDiscount };
