import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
  "/user/register",
  async ({ formValue, navigate, toast }, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/users/register",
        formValue
      );
      toast.success("Registred Successfully");
      navigate("/user/login");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/users/login",
        formValue
      );
      localStorage.setItem("userInfos", JSON.stringify(data));
      toast.success("Logged Successfully");
      navigate("/");
      window.location.reload();
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (navigate, { rejectWithValue }) => {
    try {
      await localStorage.removeItem("userInfos");
      navigate("/user/login");
      window.location.reload();
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const userStored = localStorage.getItem("userInfos")
  ? JSON.parse(localStorage.getItem("userInfos"))
  : null;

const userSlice = createSlice({
  name: "user",
  initialState: { userLoggedIn: userStored },
  extraReducers: {
    [register.pending]: (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    },
    [register.fulfilled]: (state, action) => {
      state.userRegisterd = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    },
    /////////////////////////////////////////////////
    [login.pending]: (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.userLogged = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    },
    ////////////////////////////////////////////////////
    [logout.pending]: (state, action) => {
      state.loading = true;
    },
    [logout.fulfilled]: (state, action) => {
      state.loading = false;
      state.userLogged = null;
      state.appErr = undefined;
      state.serverErr = undefined;
    },
    [logout.rejected]: (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    },
  },
});

export default userSlice.reducer;
