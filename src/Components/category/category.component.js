import "./category.styles.scss";
import { useNavigate } from "react-router-dom";

const CategoryBox = ({ className, imageUrl, name }) => {
	const navigate = useNavigate();
	const handleOnClick = () => {
		navigate(`/shop/${name}`);
	};

	return (
		<div className={`category-box  ${className}`}>
			<div
				className='category-image'
				style={{ backgroundImage: `url(${imageUrl})`, margin: "0px" }}>
				<div
					className='heading-box'
					onClick={handleOnClick}>
					<h3 className='heading'>{name}</h3>
					<h4 className='sub-heading'>Shop Now</h4>
				</div>
			</div>
		</div>
	);
};
export default CategoryBox;
