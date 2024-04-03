import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { TUserReducer } from '../../types/state';
import { TUserData } from '../../types/usert-data';

const initialState: TUserReducer = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorizationStatus(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    },
    setUser(state, action: PayloadAction<TUserData>) {
      state.user = action.payload;
    }
  }
});

export const { requireAuthorizationStatus, setUser } = userSlice.actions;
export default userSlice.reducer;

