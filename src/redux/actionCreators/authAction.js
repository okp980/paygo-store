import { getUserAuthState } from "../../firebase/firebaseUtil";
import { authSliceActions } from "../slice/authSlice";

export const verifyAuth = () => {
	return async (dispatch) => {
		getUserAuthState((user) => {
			if (user) {
				dispatch(authSliceActions.signInuser(user));
			} else {
				dispatch(authSliceActions.signOutuser());
			}
		});
	};
};
