import { NameSpace } from '../../../const';
import { filterOffersByCity } from '../../../utils/utils';
import { TGeneralOffer } from '../../types/offers';
import { TState } from '../../types/state';

export const getOffers = (state: TState): TGeneralOffer[] => state[NameSpace.Data].offers;

export const getOffersByCity = (state: TState): TGeneralOffer[] => {
  const offers = state[NameSpace.Data].offers;
  const activeCity = state[NameSpace.Interface].activeCity;

  return filterOffersByCity(offers, activeCity);
};

export const getOffersDataLoadingStatus = (state: TState): boolean => state[NameSpace.Data].isOffersDataLoading;
