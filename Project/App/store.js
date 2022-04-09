import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../App/Auth/authSlice";

export const store = configureStore({
	reducer: {
		[authSlice.name]: authSlice.reducer,
	},
});