import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { TDataReducer } from '../../types/state';
import { TGeneralOffer } from '../../types/offers';

const initialState: TDataReducer = {
  offers: [],
};

const dataSlice = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadOffers(state, action: PayloadAction<TGeneralOffer[]>) {
      state.offers = action.payload;
    }
  }
});

export const { loadOffers } = dataSlice.actions;
export default dataSlice.reducer;

