import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigation = () => {
	return (
		<Fragment>
			<div className='nav-bar'>
				<div className='nav-logo-container'>
					<Link to='/'>
						<Logo className='nav-logo'></Logo>
					</Link>
				</div>
				<div className='nav-links-container'>
					<Link
						className='nav-link'
						to='/shop'>
						<p>SHOP</p>
					</Link>
					<Link
						className='nav-link'
						to='/auth'>
						<p>Sign In</p>
					</Link>
					<Link
						className='nav-link'
						to='/shop'>
						<p>SHOP</p>
					</Link>
				</div>
			</div>
			<Outlet></Outlet>
		</Fragment>
	);
};

export default Navigation;
