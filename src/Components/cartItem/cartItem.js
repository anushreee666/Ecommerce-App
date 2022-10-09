import "./cartItem.scss";
const CartItem = ({ name, price, imageUrl, quantity }) => {
	console.log(imageUrl);
	return (
		<div className='cart-item-container'>
			<img
				className='item-image'
				src={imageUrl}
				alt={`${name}`}
			/>
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} x {price}
				</span>
			</div>
		</div>
	);
};
export default CartItem;
