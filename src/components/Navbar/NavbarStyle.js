import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	height: 40px;
	/* justify-content: space-between; */
	position: sticky;
	top: 0;
	font-family: "Lato", sans-serif;
	background-color: white;
	position: relative;
	${mobile({ overflow: "hidden" })}
`;
export const Left = styled.div`
	flex: 1;
`;
export const Center = styled.div`
	flex: 1;
	${tablet({ display: "none" })}
`;

export const NavList = styled.ul`
	display: flex;
	list-style: none;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	${tablet({ fontSize: "14px" })}
`;
export const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	padding-right: 8px;

	${NavList} {
		${mobile({ display: "none" })}
		${tablet({ display: "none" })}
	}
`;

export const Logo = styled.span`
	margin-left: 10px;
	font-size: 34px;
	font-weight: 600;
	${mobile({ fontSize: "22px" })}
`;

export const NavListItem = styled.li`
	padding: 10px 10px;

	&:hover {
		text-decoration: underline;
	}
`;

export const SubList = styled.ul`
	width: 100%;
	position: absolute;
	top: 100%;
	left: 0;
	padding: 30px;
	color: black;
	background: white;
	visibility: hidden;
	opacity: 0;
	transition: 1s opacity;
	text-align: center;
	list-style: none;
	z-index: 3;
	${NavListItem}:hover & {
		opacity: 1;
		visibility: visible;
	}

	li {
		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Img = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	object-fit: cover;
	margin: 0 10px;
`;

export const UserContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;
export const UserMenu = styled.ul`
	width: 160px;
	position: absolute;
	top: 100%;
	right: 0;
	padding: 30px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	color: black;
	background: white;
	transition: 1s opacity;
	text-align: center;
	list-style: none;
	z-index: 3;

	li {
		margin: 5px 0;
		&:hover {
			text-decoration: underline;
		}
	}
`;

export const StyledLink = styled(Link)`
	color: black;
`;

export const HamburgerContainer = styled.div`
	width: 2rem;
	height: 2rem;
	display: none;
	justify-content: space-around;
	flex-flow: column nowrap;
	z-index: 20;

	${mobile({
		display: "flex",
		justifyContent: "space-around",
		flexFlow: "column nowrap",
	})}
	${tablet({
		display: "flex",
		justifyContent: "space-around",
		flexFlow: "column nowrap",
	})}

	div {
		width: 2rem;
		height: 0.25rem;
		background-color: black;
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;

		&:nth-child(1) {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}
		&:nth-child(2) {
			transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

export const MobileNavList = styled.ul`
	display: none;
	flex-flow: column nowrap;
	justify-content: space-around;
	align-items: center;
	list-style: none;
	margin: 0;
	padding: 0;
	background-color: white;
	position: fixed;
	transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
	top: 40px;
	right: 0;
	height: 250px;
	width: 100%;
	transition: transform 0.3s ease-in-out;
	z-index: 1;

	${tablet({
		display: "flex",
		top: "40px",
	})}

	li {
		/* width: 100%; */
		&:hover {
			opacity: 0.7;
		}
	}
`;

export const MobileNavlistItem = styled.li`
	width: 100%;
	height: 40px;
	text-align: center;
	background-color: #f4f4f4;
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding-top: 10px;
`;
