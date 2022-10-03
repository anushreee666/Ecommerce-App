import "../category/category.component";
import "./categories-container.styles.scss";
import CategoryBox from "../category/category.component";

const CategoriesContainer = ({ categories }) => {
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
