import { TGeneralOffer } from '../components/types/offers';
import { AuthorizationStatus, MAX_RATING, PlacesSort } from '../const';

export const getAuthorizationStatus = () => AuthorizationStatus.NoAuth;

export const convertRatingToPercantage = (rating: number) => Math.round(rating) / MAX_RATING * 100;

export const sortOffers = (offers: TGeneralOffer[], sort: string) => {
  switch (sort) {
    case PlacesSort.PriceHighToLow:
      return offers.toSorted((a: TGeneralOffer, b: TGeneralOffer) => b.price - a.price);
    case PlacesSort.PriceLowToHigh:
      return offers.toSorted((a: TGeneralOffer, b: TGeneralOffer) => a.price - b.price);
    case PlacesSort.TopRatedFirst:
      return offers.toSorted((a: TGeneralOffer, b: TGeneralOffer) => b.rating - a.rating);
    default:
      return offers;
  }
};

export const filterOffersByCity = (offers: TGeneralOffer[], city: string) => (
  offers.filter((offer: TGeneralOffer) => offer.city.name === city)
);


