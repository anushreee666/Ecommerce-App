import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.contexts";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../Components/productCard/productCard.component";
import "./shop-preview.scss";
const ShopPreview = () => {
	const { categoriesMap } = useContext(CategoriesContext);

	const navigate = useNavigate();

	return (
		<Fragment>
			{Object.keys(categoriesMap).map((title) => (
				<Fragment key={title}>
					<h2 className='title'>
						<span
							onClick={() => {
								navigate(`${title}`);
							}}>
							{title.toUpperCase()}
						</span>
					</h2>
					<div className='product-card-container'>
						{categoriesMap[title]
							.filter((_, idx) => idx < 4)
							.map(({ name, price, imageUrl, id }) => {
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
				</Fragment>
			))}
		</Fragment>
	);
};

export default ShopPreview;
