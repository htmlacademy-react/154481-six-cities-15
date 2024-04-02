import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Cities, NameSpace } from '../../../const';
import { TInterfaceReducer } from '../../types/state';
import { TCityName } from '../../types/types';

const initialState: TInterfaceReducer = {
  activeCity: Cities.Paris,
};

const interfaceSlice = createSlice({
  name: NameSpace.Interface,
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<TCityName>) {
      state.activeCity = action.payload;
    }
  }
});

export const { setCity } = interfaceSlice.actions;
export default interfaceSlice.reducer;

