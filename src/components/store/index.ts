import { configureStore } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import interfaceReducer from './interface-reducer/interface-reducer';
import dataReducer from './data-reducer/data-reducer';
import { createAPI } from '../services/api';

const api = createAPI();

export const store = configureStore({
  reducer: {
    [NameSpace.Interface]: interfaceReducer,
    [NameSpace.Data]: dataReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  })
});
