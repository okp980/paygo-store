import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
	name: "auth",
	initialState: {
		authenticated: false,
		currentUser: null,
	},
	reducers: {
		signInuser: (state, action) => {
			state.authenticated = true;
			state.currentUser = action.payload;
		},
		signOutuser: (state, action) => {
			state.authenticated = false;
		},
	},
});
export const authSliceActions = AuthSlice.actions;

export default AuthSlice;
