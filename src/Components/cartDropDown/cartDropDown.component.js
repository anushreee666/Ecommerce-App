import Button from "../button/button.component";
import "./cartDropDown.styles.scss";
const CartDropDown = () => {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'></div>
			<Button name='Checkout Items'></Button>
		</div>
	);
};
export default CartDropDown;
