import { createContext, useState, useEffect } from "react";
// import {
// 	onAuthStateChangedListner,
// 	createUserDocumentFromAuth,
// } from "../utils/firebase/firebase.utils";

import SHOP_DATA from "../shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

//value we want to access
export const CategoriesContext = createContext({
	categoriesMap: [],
	setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});
	const value = { categoriesMap };
	useEffect(() => {
		const getCatergoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();

			setCategoriesMap(categoryMap);
		};
		getCatergoriesMap();
	}, []);

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
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
