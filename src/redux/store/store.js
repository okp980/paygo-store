import { configureStore } from "@reduxjs/toolkit";
import { verifyAuth } from "../actionCreators/authAction";
import AuthSlice from "../slice/authSlice";

const store = configureStore({
	reducer: {
		auth: AuthSlice.reducer,
	},
});
store.dispatch(verifyAuth());
export default store;
