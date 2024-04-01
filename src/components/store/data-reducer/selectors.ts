import { NameSpace } from '../../../const';
import { TGeneralOffer } from '../../types/offers';
import { TState } from '../../types/state';

export const getOffers = (state: TState): TGeneralOffer[] => state[NameSpace.Data].offers;
