import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { filterOffersByCity } from '../../../utils/utils';
import { TComment } from '../../types/comments';
import { TDetailedOffer, TGeneralOffer } from '../../types/offers';
import { TState } from '../../types/state';
import { getActiveCity } from '../interface-reducer/selectors';

export const getOffers = (state: TState): TGeneralOffer[] => state[NameSpace.Data].offers;
export const getOffer = (state: TState): TDetailedOffer | null => state[NameSpace.Data].offer;
export const getComments = (state: TState): TComment[] => state[NameSpace.Data].comments;
export const getNearbyOffers = (state: TState): TGeneralOffer[] => state[NameSpace.Data].nearbyOffers;

export const getOffersByCity = createSelector(
  [getOffers, getActiveCity],
  (offers, activeCity): TGeneralOffer[] => filterOffersByCity(offers, activeCity)
);

export const getOffersDataLoadingStatus = (state: TState): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getOfferDataLoadingStatus = (state: TState): boolean => state[NameSpace.Data].isOfferDataLoading;
export const getCommentsDataLoadingStatus = (state: TState): boolean => state[NameSpace.Data].isCommentsDataLoading;
export const getNearbyOffersDataLoadingStatus = (state: TState): boolean => state[NameSpace.Data].isNearbyOffersDataLoading;
