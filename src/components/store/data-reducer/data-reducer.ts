import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { TDataReducer } from '../../types/state';
import { TDetailedOffer, TGeneralOffer } from '../../types/offers';

const initialState: TDataReducer = {
  offers: [],
  offer: null,
  isOffersDataLoading: false,
  isOfferDataLoading: false,
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
    setOffersDataLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isOffersDataLoading = action.payload;
    },
    setOfferDataLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isOfferDataLoading = action.payload;
    }
  }
});

export const {
  loadOffers, loadOffer,
  setOffersDataLoadingStatus, setOfferDataLoadingStatus
} = dataSlice.actions;
export default dataSlice.reducer;

