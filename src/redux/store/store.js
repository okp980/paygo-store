import { configureStore } from "@reduxjs/toolkit";
import { verifyAuth } from "../actionCreators/authAction";
import AuthSlice from "../slice/authSlice";
import CartSlice from "../slice/cartSlice";

const store = configureStore({
	reducer: {
		auth: AuthSlice.reducer,
		cart: CartSlice.reducer,
	},
	devTools: process.env.NODE_ENV === "development",
});
store.dispatch(verifyAuth());
export default store;
