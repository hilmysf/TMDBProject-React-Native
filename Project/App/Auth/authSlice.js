import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isSignedIn: false,
};

export const authSlice = createSlice({
	name: "Auth",
	initialState,
	reducers: {
		login: (state) => {
			state.isSignedIn = true;
		},
		logout: (state) => {
			state.isSignedIn = false;
		},
	},
});

export const { login, logout } = authSlice.actions;
