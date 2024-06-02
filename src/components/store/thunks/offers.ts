import { AxiosInstance } from 'axios';
import { TAppDispatch, TState } from '../../types/state';
import { TDetailedOffer, TGeneralOffer } from '../../types/offers';
import {
  loadNearbyOffers, loadOffer, loadOffers,
  setNearbyOffersDataLoadingStatus, setOfferDataLoadingStatus, setOffersDataLoadingStatus
} from '../data-reducer/data-reducer';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AppRoute } from '../../../const';
import { redirectToRoute } from '../action';
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

export const fetchNearbyOffersAction = createAsyncThunk<void, string, {
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
