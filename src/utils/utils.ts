import { AuthorizationStatus, MAX_RATING } from '../const';

export const getAuthorizationStatus = () => AuthorizationStatus.Auth;

export const setRating = (rating: number) => rating / MAX_RATING * 100;
