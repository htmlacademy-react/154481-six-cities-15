import { store } from '../store';
import { TCityName } from './cities';
import { TGeneralOffer } from './offers';

export type TInterfaceReducer = {
  activeCity: TCityName;
}

export type TDataReducer = {
  offers: TGeneralOffer[];
}

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
