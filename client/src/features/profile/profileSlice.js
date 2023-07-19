import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createProfile, getProfile, updateProfile, deleteProfile } from "../../api/profileApi";

// export const signupUser = createAsyncThunk("user/signup", signup);
export const createUserProfile = createAsyncThunk(
  "/create-profile",
  async (profileData) => {
    const response = await createProfile(profileData);
    console.log(response.user);
    return response.user;
  }
);
//export const signinUser = createAsyncThunk("user/signin", signin);
export const getUserProfile = createAsyncThunk(
    `/get:id`,
  async (id) => {
    const response = await getProfile(id);
    console.log(response);
    // localStorage.setItem("token", response.token);
    return response;
  }
);
export const updateUserProfile = createAsyncThunk(
    `/update/:id`,async ({user_id, bio, location }) => {
    const response = await updateProfile({user_id, bio, location });
    console.log(response);
    // localStorage.removeItem("token");
    return response;
    
  }
);
export const deleteUserProfile = createAsyncThunk(
    `/delete/:id`,async (id) => {
    const response = await deleteProfile(id);
    console.log(response);
    return response;
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: { profile: null, token: "", status: "idle", error: null},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
      })
      .addCase(deleteUserProfile.fulfilled, (state) => {
        state.status = "succeeded";
        state.profile = null;
      });
    
  },
});

export default profileSlice.reducer;
