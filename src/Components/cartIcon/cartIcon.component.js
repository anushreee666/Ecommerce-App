import { useContext } from "react";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cartIcon.component.scss";

const CartIcon = () => {
	const { cartVisible, setCartVisiblility } = useContext(CartContext);
	const toggleCartClick = () => {
		console.log("cart clicked");
		if (cartVisible) {
			setCartVisiblility(false);
		} else {
			console.log("set true");
			setCartVisiblility(true);
		}
	};
	return (
		<div
			className='shopping-cart-container'
			onClick={toggleCartClick}>
			<span className='shopping-cart-count'>0</span>
			<ShoppingCart className='shopping-cart'></ShoppingCart>
		</div>
	);
};
export default CartIcon;
