import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import interfaceReducer from './interface-reducer/interface-reducer';
import dataReducer from './data-reducer/data-reducer';
import userReducer from './user-reducer/user-reducer';

export const rootReducer = combineReducers({
  [NameSpace.Interface]: interfaceReducer,
  [NameSpace.Data]: dataReducer,
  [NameSpace.User]: userReducer,
});
