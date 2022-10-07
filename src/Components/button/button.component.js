import "./button.styles.scss";

const Button = ({ name, ...otherProps }) => {
	return (
		<button
			className={` button-style ${
				otherProps.buttontype ? otherProps.buttontype : ""
			} `}
			{...otherProps}>
			{name}
		</button>
	);
};

export default Button;
