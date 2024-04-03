import { store } from '../store';
import { TCityName } from './types';
import { TGeneralOffer } from './offers';
import { AuthorizationStatus } from '../../const';

export type TInterfaceReducer = {
  activeCity: TCityName;
}

export type TDataReducer = {
  offers: TGeneralOffer[];
  isOffersDataLoading: boolean;
}

export type TUserReducer = {
  authorizationStatus: AuthorizationStatus;
}

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
