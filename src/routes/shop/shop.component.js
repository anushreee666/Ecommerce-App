import { useContext } from "react";
import { ProductContext } from "../../contexts/product.contexts";
import ProductCard from "../../Components/productCard/productCard.component";
import "./shop.styles.scss";
const Shop = () => {
	const { productList } = useContext(ProductContext);
	return (
		<div>
			<div className='product-card-container'>
				{productList.map(({ name, price, imageUrl, id }) => {
					return (
						<ProductCard
							className='product-card'
							id={id}
							key={id}
							name={name}
							price={price}
							imageUrl={imageUrl}></ProductCard>
					);
				})}
			</div>
		</div>
	);
};

export default Shop;
