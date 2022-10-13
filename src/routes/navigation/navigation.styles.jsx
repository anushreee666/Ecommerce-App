import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	margin: 0px 15px;
	box-sizing: border-box;
`;

export const LogoContainer = styled.div`
	margin-top: 8px;
`;
export const NavLinkContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	text-align: right;
`;

export const NavLink = styled(Link)`
	padding: 0px 10px;
	color: rgb(44, 44, 44);
	font-size: 20px;
	text-decoration: none;

	:hover {
		color: rgb(38, 37, 37);

		font-weight: 800;
	}
`;
export const CartIconContainer = styled.div`
	:hover {
		cursor: pointer;
	}
`;

// .nav-bar {

// 	.nav-logo-container {

// 		.nav-logo {
// 		}
// 	}
// 	.nav-links-container {

// 		.nav-link {

// 		}
// 		// .nav-link :hover {
// 		// 	// color: rgb(38, 37, 37);
// 		// 	// font-size: 21px;
// 		// 	// margin-bottom: -1px;
// 		// 	// font-weight: 800;
// 		// }
// 		.cart-icon {
// 		}
// 		// .cart-icon:hover {
// 		// 	cursor: pointer;
// 		// }
// 	}
//}
