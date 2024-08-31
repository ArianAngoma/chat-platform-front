import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './index.ts';

import { Store } from '../types/store.ts';
import { AuthState, Tokens } from '../types/auth.ts';
import { User } from '../types/user.ts';

const authInitialState: AuthState = {
  user: null,
  tokens: null,
};

export const authStore = createSlice({
  name: Store.AUTH,
  initialState: authInitialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, tokens },
      }: PayloadAction<{ user: User; tokens: Tokens }>
    ) => {
      state.user = user;
      state.tokens = tokens;
    },
  },
});

export const { setCredentials } = authStore.actions;

export default authStore.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
