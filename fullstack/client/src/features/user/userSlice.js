import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signup, signin, signout } from "../../api/userApi";

// export const signupUser = createAsyncThunk("user/signup", signup);
export const signupUser = createAsyncThunk(
  "user/signup",
  async ({ username, password }) => {
    const response = await signup(username, password);
    console.log(response.user);
    return response.user;
  }
);
//export const signinUser = createAsyncThunk("user/signin", signin);
export const signinUser = createAsyncThunk(
  "user/signin",
  async ({ username, password }) => {
    const response = await signin(username, password);
    console.log(response.token);
    localStorage.setItem("token", response.token);
    return response.token;
  }
);
export const signoutUser = createAsyncThunk("user/signout", signout);

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, token: "", status: "idle", error: null},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload;
      })
      .addCase(signoutUser.fulfilled, (state) => {
        state.status = "succeeded";
        state.token = null;
      });
    
  },
});

export default userSlice.reducer;
