import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import {
	getFirestore,
	getDoc,
	setDoc,
	doc,
	collection,
	writeBatch,
	query,
	getDocs,
} from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyC-3WZrHNVHwbddOUxTRHs2fT3jrTsOpzQ",
	authDomain: "ecommerce-app-55a91.firebaseapp.com",
	projectId: "ecommerce-app-55a91",
	storageBucket: "ecommerce-app-55a91.appspot.com",
	messagingSenderId: "416534246178",
	appId: "1:416534246178:web:fe0a0221cb8a8e135beb7b",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Sign Up

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

// adding user in Database
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
	const userDocRef = doc(db, "users", userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfo,
			});
		} catch (e) {
			console.log("error", e.message);
		}
	}

	return userDocRef;
};

//Sign In
//with email
export const signInWithEmailPass = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

//with google provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGooglePopup = () => {
	return signInWithPopup(auth, googleProvider);
};

//signout function
export const signOutUser = async () => {
	return await signOut(auth);
};

export const onAuthStateChangedListner = (callback) => {
	return onAuthStateChanged(auth, callback);
};

//setting up shop data
export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);
	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, "categories");

	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const { title, items } = docSnapshot.data();
		acc[title.toLowerCase()] = items;
		return acc;
	}, {});

	return categoryMap;
};
