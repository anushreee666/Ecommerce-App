import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cartItem/cartItem";
import { CartContext } from "../../contexts/cart.context";
import "./cartDropDown.styles.scss";

const CartDropDown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();
	const handleCheckout = () => {
		navigate("/checkout");
	};
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((item) => {
					const { id, name, price, imageUrl, quantity } = item;
					return (
						<CartItem
							key={id}
							name={name}
							price={price}
							imageUrl={imageUrl}
							quantity={quantity}></CartItem>
					);
				})}
			</div>
			<Button
				name='Checkout Items'
				onClick={handleCheckout}></Button>
		</div>
	);
};
export default CartDropDown;
