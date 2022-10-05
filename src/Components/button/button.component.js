import "./button.styles.scss";

// const BUTTON_TYPE_LIST = { google: "google", inverted: "inverted" };

const Button = ({ name, ...otherProps }) => {
	return (
		<button
			className={` button-style ${
				otherProps.buttonType ? otherProps.buttonType : ""
			} `}
			{...otherProps}>
			{name}
		</button>
	);
};

export default Button;
