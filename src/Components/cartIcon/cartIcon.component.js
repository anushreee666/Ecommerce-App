import { useContext } from "react";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cartIcon.component.scss";

const CartIcon = () => {
	const { cartVisible, setCartVisiblility, totalItems } =
		useContext(CartContext);

	const toggleCartClick = () => {
		if (cartVisible) {
			setCartVisiblility(false);
		} else {
			setCartVisiblility(true);
		}
	};
	return (
		<div
			className='shopping-cart-container'
			onClick={toggleCartClick}>
			<span className='shopping-cart-count'>{totalItems}</span>
			<ShoppingCart className='shopping-cart'></ShoppingCart>
		</div>
	);
};
export default CartIcon;
