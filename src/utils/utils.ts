import { AuthorizationStatus, MAX_RATING } from '../const';

export const getAuthorizationStatus = () => AuthorizationStatus.Auth;

export const convertRatingToPercantage = (rating: number) => Math.round(rating) / MAX_RATING * 100;
