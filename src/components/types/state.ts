import { store } from '../store';
import { TGeneralOffer } from './offers';

export type TInterfaceReducer = {
  activeCity: string;
}

export type TDataReducer = {
  offers: TGeneralOffer[];
}

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
