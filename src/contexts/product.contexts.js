import { createContext, useState } from "react";
// import {
// 	onAuthStateChangedListner,
// 	createUserDocumentFromAuth,
// } from "../utils/firebase/firebase.utils";

import PRODUCTS from "../shop-data.json";

//value we want to access
export const ProductContext = createContext({
	productList: [],
	setProductLists: () => null,
});

export const ProductProvider = ({ children }) => {
	const [productList, setProductLists] = useState(PRODUCTS);
	const value = { productList };

	// useEffect(() => {
	// 	// const unsubscribe = onAuthStateChangedListner((user) => {
	// 	// 	setCurrentUser(user);
	// 	// 	if (user) {
	// 	// 		createUserDocumentFromAuth(user);
	// 	// 	}
	// 		console.log("issser", user);
	// 	});

	// }, []);
	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};
