import { useContext } from "react";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import "./productCard.component.scss";

const ProductCard = ({ id, name, price, imageUrl }) => {
	const { addCartItems } = useContext(CartContext);
	const handleAddtoCart = () => {
		addCartItems({ id, name, price, imageUrl });
	};

	return (
		<div className='product-container'>
			<div
				className='product-image'
				style={{
					backgroundImage: `url(${imageUrl})`,
					margin: "0px",
				}}>
				<Button
					name='ADD TO CART'
					buttontype='inverted'
					onClick={handleAddtoCart}></Button>
			</div>
			<div className='product-description'>
				<span>{name}</span>
				<span>{price}</span>
			</div>
		</div>
	);
};

export default ProductCard;
