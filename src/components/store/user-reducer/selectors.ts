import { AuthorizationStatus, NameSpace } from '../../../const';
import { TState } from '../../types/state';
import { TUserData } from '../../types/usert-data';

export const getAuthorizationStatus = (state: TState): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getUser = (state: TState): TUserData | null => state[NameSpace.User].user;
