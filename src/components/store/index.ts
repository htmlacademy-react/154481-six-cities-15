import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import interfaceReducer from './interface-reducer/interface-reducer';
import dataReducer from './data-reducer/data-reducer';
import { createAPI } from '../services/api';
import userReducer from './user-reducer/user-reducer';
import { redirect } from './middlewares/redirect';

const api = createAPI();

export const rootReducer = combineReducers({
  [NameSpace.Interface]: interfaceReducer,
  [NameSpace.Data]: dataReducer,
  [NameSpace.User]: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  }).concat(redirect)
});
