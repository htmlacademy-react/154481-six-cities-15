import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { TUserReducer } from '../../types/state';

const initialState: TUserReducer = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setAuthorizationStatus(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    }
  }
});

export const { setAuthorizationStatus } = userSlice.actions;
export default userSlice.reducer;

