import Button from "../button/button.component";
import "./productCard.component.scss";

const ProductCard = ({ name, price, imageUrl }) => {
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
					buttontype='inverted'></Button>
			</div>
			<div className='product-description'>
				<span>{name}</span>
				<span>{price}</span>
			</div>
		</div>
	);
};

export default ProductCard;
