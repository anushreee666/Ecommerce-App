import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkoutItemCard.component.scss";
const CheckoutItemCard = (cartItem) => {
	const { name, price, imageUrl, quantity } = cartItem;
	const { addCartItems, removeCartItems } = useContext(CartContext);
	const decrement = () => removeCartItems(cartItem);
	const increment = () => addCartItems(cartItem);
	const discard = () => removeCartItems(cartItem, true);
	return (
		<div className='checkout-item-container'>
			<img
				className='image-container'
				src={imageUrl}
				alt={`${name}`}
			/>

			<span className='name'>{name}</span>

			<span className='quantity'>
				<div
					className='arrow'
					onClick={decrement}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div
					className='arrow'
					onClick={increment}>
					&#10095;
				</div>
			</span>

			<span className='price'>{price}</span>
			<span onClick={discard}>&#10005;</span>
		</div>
	);
};
export default CheckoutItemCard;
