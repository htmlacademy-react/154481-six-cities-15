import { configureStore } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import interfaceReducer from './interface-reducer/interface-reducer';
import dataReducer from './data-reducer/data-reducer';

export const store = configureStore({
  reducer: {
    [NameSpace.Interface]: interfaceReducer,
    [NameSpace.Data]: dataReducer
  }
});
