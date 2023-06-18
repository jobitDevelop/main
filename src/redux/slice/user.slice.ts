import { createSlice } from '@reduxjs/toolkit';
import { TUser } from '../../types/user.types';

const initialState: { user: TUser | null } = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = { ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn } = userSlice.actions;

export default userSlice.reducer;
