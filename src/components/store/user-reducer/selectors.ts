import { AuthorizationStatus, NameSpace } from '../../../const';
import { TState } from '../../types/state';

export const getAuthorizationStatus = (state: TState): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
