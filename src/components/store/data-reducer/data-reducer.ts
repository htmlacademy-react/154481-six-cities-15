import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { TDataReducer } from '../../types/state';
import { TGeneralOffer } from '../../types/offers';

const initialState: TDataReducer = {
  offers: [],
  isOffersDataLoading: false,
};

const dataSlice = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadOffers(state, action: PayloadAction<TGeneralOffer[]>) {
      state.offers = action.payload;
    },
    setOffersDataLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isOffersDataLoading = action.payload;
    }
  }
});

export const { loadOffers, setOffersDataLoadingStatus } = dataSlice.actions;
export default dataSlice.reducer;

