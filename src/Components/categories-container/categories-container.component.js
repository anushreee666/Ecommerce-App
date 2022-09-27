import "../category/category.component";
import "./categories-container.styles.scss";
import CategoryBox from "../category/category.component";
const categories = [
	{
		id: 1,
		title: "hats",
		imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
	},
	{
		id: 2,
		title: "jackets",
		imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
	},
	{
		id: 3,
		title: "sneakers",
		imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
	},
	{
		id: 4,
		title: "womens",
		imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
	},
	{
		id: 5,
		title: "mens",
		imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
	},
];

const CategoriesContainer = () => {
	return (
		<div className='categories-container grid-container'>
			{categories.map(({ id, title, imageUrl }) => {
				const categoryBoxClassName = `grid-item-${id} `;

				return (
					<CategoryBox
						className={categoryBoxClassName}
						name={title}
						imageUrlhere={imageUrl}
						key={id}></CategoryBox>
				);
			})}
		</div>
	);
};

export default CategoriesContainer;
