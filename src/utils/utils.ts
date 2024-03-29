import { AuthorizationStatus, MAX_RATING } from '../const';

export const getAuthorizationStatus = () => AuthorizationStatus.NoAuth;

export const setRating = (rating: number) => rating / MAX_RATING * 100;
