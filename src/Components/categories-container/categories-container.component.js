import CategoryBox from "../category/category.component";
import "../category/category.component";
import "./categories-container.styles.scss";

const CategoriesContainer = ({ categories }) => {
	return (
		<div className='categories-container grid-container'>
			{categories.map(({ id, title, imageUrl }) => {
				const categoryBoxClassName = `grid-item-${id} `;

				return (
					<CategoryBox
						className={categoryBoxClassName}
						name={title}
						imageUrl={imageUrl}
						key={id}></CategoryBox>
				);
			})}
		</div>
	);
};

export default CategoriesContainer;
