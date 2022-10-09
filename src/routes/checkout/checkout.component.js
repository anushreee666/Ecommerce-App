import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItemCard from "../../Components/checkoutItemCard/checkoutItemCard.component";

const Checkout = () => {
	const { cartItems, totalPrice } = useContext(CartContext);

	return (
		<div className='checkout-container'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>

			{cartItems &&
				cartItems.map((item) => {
					const { id, name, price, imageUrl, quantity } = item;
					return (
						<CheckoutItemCard
							key={id}
							id={id}
							name={name}
							price={price}
							imageUrl={imageUrl}
							quantity={quantity}></CheckoutItemCard>
					);
				})}

			<span className='total'>Total: RS {totalPrice}/-</span>
		</div>
	);
};
export default Checkout;
