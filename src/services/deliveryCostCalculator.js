import { isOfferCodeValid } from './offerService.js';

// Async function to dynamically load offers configuration
async function loadOffersConfig() {
    const offers = await import('../../config/offers.json', {
        assert: { type: 'json' }
    });
    return offers.default;
}


async function calculateDeliveryCost(baseDeliveryCost, weight, distance, offerCode) {
    const baseCost = baseDeliveryCost + (weight * 10) + (distance * 5);
    let discount = 0;
    let message = '';

    if (isNaN(baseDeliveryCost) || isNaN(weight) || isNaN(distance)) {
        return { totalCost: NaN, discount: NaN, message: "Error: Invalid numerical inputs." };
    }

    const OFFERS = await loadOffersConfig();
    const isValidOfferCode = await isOfferCodeValid(offerCode); 

    discount = calculateDiscount(baseCost, weight, distance, offerCode, OFFERS);

    if (offerCode) {
        if (!isValidOfferCode) {
            message = 'Invalid offer code. No discount applied.';
        } else if (discount === 0) {
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

export { calculateDeliveryCost, calculateDiscount };
