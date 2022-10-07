import { createContext, useState } from "react";

export const CartContext = createContext({
	cartVisible: false,
	cartItems: [],
	setCartVisiblility: () => {},
	setCartItems: () => null,
});

export const CartProvider = ({ children }) => {
	const [cartVisible, setCartVisiblility] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const value = { cartVisible, setCartVisiblility };
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
