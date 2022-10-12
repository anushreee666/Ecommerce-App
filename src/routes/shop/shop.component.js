import { Routes, Route } from "react-router-dom";
import ShopPreview from "../shop-preview/shop-preview";
import ShopCategory from "../shop-category/shop-category";
import "./shop.styles.scss";
console.log(":category");
const Shop = () => {
	return (
		<Routes>
			<Route
				index
				element={<ShopPreview />}
			/>
			<Route
				path='/:category'
				element={<ShopCategory />}
			/>
		</Routes>
	);
};

export default Shop;
