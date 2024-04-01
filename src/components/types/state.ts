import { store } from '../store';
import { TGeneralOffer } from './offers';

export type TInitialState = {
  activeCity: string;
  offers: TGeneralOffer[];
}

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
