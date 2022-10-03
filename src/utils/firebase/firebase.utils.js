import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
} from "firebase/auth";
import {
	getFirestore,
	getDoc,
	setDoc,
	doc,
	Firestore,
} from "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyC-3WZrHNVHwbddOUxTRHs2fT3jrTsOpzQ",
	authDomain: "ecommerce-app-55a91.firebaseapp.com",
	projectId: "ecommerce-app-55a91",
	storageBucket: "ecommerce-app-55a91.appspot.com",
	messagingSenderId: "416534246178",
	appId: "1:416534246178:web:fe0a0221cb8a8e135beb7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(app);
export const signInWithGooglePopup = () => {
	return signInWithPopup(auth, provider);
};

//Initializing db

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);
	console.log("userAuth", userAuth);
	console.log("userDocRef", userDocRef);
	console.log("userSnapshot", userSnapshot);
	console.log(userSnapshot.exists());

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, { displayName, email, createdAt });
		} catch (e) {
			console.log("error", e.message);
		}
	}

	return userDocRef;
};
