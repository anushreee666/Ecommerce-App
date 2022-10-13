import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.contexts";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
import CartDropDown from "../../Components/cartDropDown/cartDropDown.component";
import CartIcon from "../../Components/cartIcon/cartIcon.component";
import {
	NavBar,
	LogoContainer,
	NavLinkContainer,
	NavLink,
} from "./navigation.styles.jsx";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { cartVisible } = useContext(CartContext);

	const signOutHandler = async () => {
		await signOutUser();
	};

	return (
		<Fragment>
			<NavBar>
				<LogoContainer>
					<Link to='/'>
						<Logo className='nav-logo'></Logo>
					</Link>
				</LogoContainer>
				<NavLinkContainer>
					{currentUser ? (
						<NavLink
							to='/auth'
							onClick={signOutHandler}>
							<p>Sign Out</p>
						</NavLink>
					) : (
						<NavLink to='/auth'>
							<p>Sign In</p>
						</NavLink>
					)}

					<NavLink to='/shop'>
						<p>SHOP</p>
					</NavLink>
					<div>
						<CartIcon></CartIcon>
					</div>
				</NavLinkContainer>
				{cartVisible ? <CartDropDown></CartDropDown> : ""}
			</NavBar>
			<Outlet></Outlet>
		</Fragment>
	);
};

export default Navigation;
