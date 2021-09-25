import firebase from "./firebase";

export function getUserAuthState(callbackFunc) {
	return firebase.auth().onAuthStateChanged(callbackFunc); //accepts a callback function
}

export function signInUser() {
	const provider = new firebase.auth.GoogleAuthProvider();
	provider.setCustomParameters({ prompt: "select_account" });
	return firebase.auth().signInWithPopup(provider);
}

export function signOutUserFromFirebase() {
	return firebase.auth().signOut();
}
