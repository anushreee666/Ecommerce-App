import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.contexts";
import ProductCard from "../../Components/productCard/productCard.component";

const ShopCategory = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [product, setProducts] = useState(categoriesMap[category]);
	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<div>
			<h2 className='title'>
				<span>{category}</span>
			</h2>
			<div>
				{product && (
					<div className='product-card-container'>
						{product.map(({ name, price, imageUrl, id }) => {
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
				)}
			</div>
		</div>
	);
};
export default ShopCategory;
