import { store } from '../store';
import { TCityName } from './types';
import { TGeneralOffer } from './offers';
import { AuthorizationStatus } from '../../const';
import { TUserData } from './usert-data';

export type TInterfaceReducer = {
  activeCity: TCityName;
}

export type TDataReducer = {
  offers: TGeneralOffer[];
  isOffersDataLoading: boolean;
}

export type TUserReducer = {
  authorizationStatus: AuthorizationStatus;
  user: TUserData | null;
}

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
