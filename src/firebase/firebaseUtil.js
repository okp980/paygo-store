import firebase from "./firebase";

const auth = firebase.auth();

export function getUserAuthState(callbackFunc) {
	return firebase.auth().onAuthStateChanged(callbackFunc); //accepts a callback function
}

export function signOutUserFromFirebase() {
	return firebase.auth().signOut();
}
