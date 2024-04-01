import { NameSpace } from '../../../const';
import { TState } from '../../types/state';

export const getActiveCity = (state: TState): string => state[NameSpace.Interface].activeCity;
