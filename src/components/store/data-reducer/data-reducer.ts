import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { TDataReducer } from '../../types/state';
import { TDetailedOffer, TGeneralOffer } from '../../types/offers';
import { TComment } from '../../types/comments';

const initialState: TDataReducer = {
  offers: [],
  offer: null,
  comments: [],
  nearbyOffers: [],
  isOffersDataLoading: false,
  isOfferDataLoading: false,
  isCommentsDataLoading: false,
  isNearbyOffersDataLoading: false,
};

const dataSlice = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadOffers(state, action: PayloadAction<TGeneralOffer[]>) {
      state.offers = action.payload;
    },
    loadOffer(state, action: PayloadAction<TDetailedOffer>) {
      state.offer = action.payload;
    },
    loadComments(state, action: PayloadAction<TComment[]>) {
      state.comments = action.payload;
    },
    loadNearbyOffers(state, action: PayloadAction<TGeneralOffer[]>) {
      state.nearbyOffers = action.payload;
    },
    setOffersDataLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isOffersDataLoading = action.payload;
    },
    setOfferDataLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isOfferDataLoading = action.payload;
    },
    setCommentsDataLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isCommentsDataLoading = action.payload;
    },
    setNearbyOffersDataLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isNearbyOffersDataLoading = action.payload;
    },
  }
});

export const {
  loadOffers, loadOffer, loadComments, loadNearbyOffers,
  setOffersDataLoadingStatus, setOfferDataLoadingStatus, setCommentsDataLoadingStatus, setNearbyOffersDataLoadingStatus
} = dataSlice.actions;
export default dataSlice.reducer;

