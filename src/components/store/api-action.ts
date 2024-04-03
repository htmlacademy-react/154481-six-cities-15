import { AxiosInstance } from 'axios';
import { TAppDispatch, TState } from '../types/state';
import { TDetailedOffer, TGeneralOffer } from '../types/offers';
import { loadComments, loadNearbyOffers, loadOffer, loadOffers, setCommentsDataLoadingStatus, setNearbyOffersDataLoadingStatus, setOfferDataLoadingStatus, setOffersDataLoadingStatus } from './data-reducer/data-reducer';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute, AuthorizationStatus } from '../../const';
import { requireAuthorizationStatus, setUser } from './user-reducer/user-reducer';
import { TAuthData } from '../types/auth-data';
import { TUserData } from '../types/usert-data';
import { dropToken, saveToken } from '../services/token';
import { redirectToRoute } from './action';
import { TComment } from '../types/comments';
import { generatePath } from 'react-router-dom';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<TGeneralOffer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

export const fetchOfferACtion = createAsyncThunk <void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, { dispatch, extra: api }) => {
    try {
      dispatch(setOfferDataLoadingStatus(true));
      const { data } = await api.get<TDetailedOffer>(`${APIRoute.Offers}/${id}`);
      dispatch(setOfferDataLoadingStatus(false));
      dispatch(loadOffer(data));
    } catch {
      dispatch(setOfferDataLoadingStatus(false));
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

export const fetchCommentsAction = createAsyncThunk <void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, { dispatch, extra: api }) => {
    dispatch(setCommentsDataLoadingStatus(true));
    const { data } = await api.get<TComment[]>(`${APIRoute.Comments}/${id}`);
    dispatch(setCommentsDataLoadingStatus(false));
    dispatch(loadComments(data));
  }
);

export const fetchNearbyOffersAction = createAsyncThunk <void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (id, { dispatch, extra: api }) => {
    dispatch(setNearbyOffersDataLoadingStatus(true));
    const { data } = await api.get<TGeneralOffer[]>(generatePath(APIRoute.Nearby, {id}));
    dispatch(setNearbyOffersDataLoadingStatus(false));
    dispatch(loadNearbyOffers(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk <void, TAuthData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<TUserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(requireAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(setUser(data));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk < void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
);


