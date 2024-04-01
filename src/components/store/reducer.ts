import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../../const';
import { changeCity, getOffers } from './action';
import { TInitialState } from '../types/state';

const initialState: TInitialState = {
  activeCity: Cities.Paris,
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    });
});


export { reducer };
