import "./category.styles.scss";
const CategoryBox = ({ className, imageUrl, name }) => {
	console.log(imageUrl, name);
	return (
		<div className={`category-box  ${className}`}>
			<div
				className='category-image'
				style={{ backgroundImage: `url(${imageUrl})`, margin: "0px" }}>
				<div className='heading-box'>
					<h3 className='heading'>{name}</h3>
					<h4 className='sub-heading'>Shop Now</h4>
				</div>
			</div>
		</div>
	);
};
export default CategoryBox;
