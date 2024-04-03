import { store } from '../store';
import { TCityName } from './types';
import { TDetailedOffer, TGeneralOffer } from './offers';
import { AuthorizationStatus } from '../../const';
import { TUserData } from './usert-data';
import { TComment } from './comments';

export type TInterfaceReducer = {
  activeCity: TCityName;
}

export type TDataReducer = {
  offers: TGeneralOffer[];
  offer: TDetailedOffer | null;
  comments: TComment[];
  nearbyOffers: TGeneralOffer[];
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  isCommentsDataLoading: boolean;
  isNearbyOffersDataLoading: boolean;
}

export type TUserReducer = {
  authorizationStatus: AuthorizationStatus;
  user: TUserData | null;
}

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
