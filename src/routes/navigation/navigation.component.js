import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.contexts";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../Components/cartIcon/cartIcon.component";
import CartDropDown from "../../Components/cartDropDown/cartDropDown.component";
import "./navigation.styles.scss";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { cartVisible } = useContext(CartContext);
	console.log("cart visibility", cartVisible, currentUser);

	const signOutHandler = async () => {
		await signOutUser();
	};

	return (
		<Fragment>
			<div className='nav-bar'>
				<div className='nav-logo-container'>
					<Link to='/'>
						<Logo className='nav-logo'></Logo>
					</Link>
				</div>
				<div className='nav-links-container'>
					{currentUser ? (
						<Link
							className='nav-link'
							to='/auth'
							onClick={signOutHandler}>
							<p>Sign Out</p>
						</Link>
					) : (
						<Link
							className='nav-link'
							to='/auth'>
							<p>Sign In</p>
						</Link>
					)}

					<Link
						className='nav-link'
						to='/shop'>
						<p>SHOP</p>
					</Link>
					<div className='cart-icon'>
						<CartIcon></CartIcon>
					</div>
				</div>
				{cartVisible ? <CartDropDown></CartDropDown> : ""}
			</div>
			<Outlet></Outlet>
		</Fragment>
	);
};

export default Navigation;
