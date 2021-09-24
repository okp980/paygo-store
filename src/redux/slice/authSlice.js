import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
	name: "auth",
	initialState: {
		authenticated: false,
		currentUser: null,
	},
	reducers: {
		signInuser: (state, payload) => {
			state.authenticated = true;
			state.currentUser = payload;
		},
		signOutuser: (state) => {
			state.authenticated = false;
		},
	},
});
export const authSliceActions = AuthSlice.actions;

export default AuthSlice;
