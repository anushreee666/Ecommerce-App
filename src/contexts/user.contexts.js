import { createContext, useState, useEffect } from "react";
import {
	onAuthStateChangedListner,
	createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

//value we want to access
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListner((user) => {
			setCurrentUser(user);
			if (user) {
				createUserDocumentFromAuth(user);
			}
		});
		return unsubscribe;
	}, []);
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
