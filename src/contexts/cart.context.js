import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
	cartVisible: false,
	setCartVisiblility: () => {},

	cartItems: [],
	addCartItems: () => null,
	removeCartItems: () => {},

	totalItems: 0,
	setTotalItems: () => {},
});

export const CartProvider = ({ children }) => {
	//dropdown
	const [cartVisible, setCartVisiblility] = useState(false);
	//Items inside cart
	const [cartItems, setCartItems] = useState([]);
	//total number of items
	const [totalItems, setTotalItems] = useState(0);
	//total price
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let total = 0;
		cartItems.map((item) => (total += item.quantity));
		setTotalItems(total);
	}, [cartItems]);

	useEffect(() => {
		let totalPrice = 0;
		cartItems.map((item) => (totalPrice += item.quantity * item.price));
		setTotalPrice(totalPrice);
	}, [cartItems]);

	const itemsToAdd = (newItem) => {
		const { id, name, price, imageUrl } = newItem;
		let quantityIncreased = false;

		for (let i = 0; i < cartItems.length; i++) {
			if (id === cartItems[i].id) {
				cartItems[i].quantity = cartItems[i].quantity + 1;
				quantityIncreased = true;
				break;
			}
		}

		if (!quantityIncreased) {
			return [
				{
					id: id,
					name: name,
					price: price,
					imageUrl: imageUrl,
					quantity: 1,
				},
				...cartItems,
			];
		} else {
			return [...cartItems];
		}
	};

	const addCartItems = (newItem) => {
		setCartItems(itemsToAdd(newItem));
	};
	const itemsToRemove = (removeItem, discard) => {
		//existing item
		const existingItem = cartItems.find((item) => removeItem.id === item.id);
		//if 1

		if (existingItem.quantity === 1 || discard) {
			return cartItems.filter((item) => item.id !== existingItem.id);
		}

		//else
		return cartItems.map((item) =>
			item.id === existingItem.id
				? { ...item, quantity: item.quantity - 1 }
				: item
		);
	};

	const removeCartItems = (removeItem, discard = false) => {
		setCartItems(itemsToRemove(removeItem, discard));
	};

	const value = {
		cartVisible,
		setCartVisiblility,
		cartItems,
		addCartItems,
		removeCartItems,
		totalItems,
		totalPrice,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
