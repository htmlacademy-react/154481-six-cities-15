import { NameSpace } from '../../../const';
import { filterOffersByCity } from '../../../utils/utils';
import { TDetailedOffer, TGeneralOffer } from '../../types/offers';
import { TState } from '../../types/state';

export const getOffers = (state: TState): TGeneralOffer[] => state[NameSpace.Data].offers;

export const getOffersByCity = (state: TState): TGeneralOffer[] => {
  const offers = state[NameSpace.Data].offers;
  const activeCity = state[NameSpace.Interface].activeCity;

  return filterOffersByCity(offers, activeCity);
};

export const getOffer = (state: TState): TDetailedOffer | null => state[NameSpace.Data].offer;

export const getOffersDataLoadingStatus = (state: TState): boolean => state[NameSpace.Data].isOffersDataLoading;

export const getOfferDataLoadingStatus = (state: TState): boolean => state[NameSpace.Data].isOfferDataLoading;
