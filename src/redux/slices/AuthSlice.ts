import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  token: false,
  user: null,
};

export const LoginAuth = createAsyncThunk(
  'LoginAuth',
  async (credentials: { username: string; password: string }) => {
    const res = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const response = await res.json();
    if (response?.token) {
      return response;
    }
  },
);
export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(LoginAuth.pending, (state, action) => {});
    builder.addCase(LoginAuth.fulfilled, (state, action) => {
      console.log(state, action);
    });
  },
});

export const {} = AuthSlice.actions;

export default AuthSlice.reducer;
