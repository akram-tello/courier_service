import OFFERS from '../constants/offers.js';

function isOfferCodeValid(offerCode) {
  return !!OFFERS[offerCode];
}

export { isOfferCodeValid };