import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	/* justify-content: space-between; */
	position: sticky;
	top: 0;
	font-family: "Lato", sans-serif;
	background-color: white;
	position: relative;
`;
export const Left = styled.div`
	/* background-color: yellow; */
	flex: 1;
`;
export const Center = styled.div`
	/* background-color: blue; */
	flex: 1;
	/* display: flex;
	flex-direction: row; */
`;
export const Right = styled.div`
	/* background-color: red; */
	flex: 1;
`;

export const Logo = styled.span`
	margin-left: 10px;
	font-size: 34px;
	font-weight: 600;
`;
export const NavList = styled.ul`
	display: flex;
	list-style: none;
	align-items: center;
	justify-content: center;
	font-size: 18px;
`;

export const NavListItem = styled.li`
	/* margin: 0 14px; */
	padding: 10px 15px;
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
	width: 40px;
	height: 40px;
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
	width: 120px;
	position: absolute;
	top: 100%;
	/* right: 0; */
	padding: 30px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	/* text-align: center; */
	color: black;
	background: white;
	visibility: hidden;
	opacity: 0;
	transition: 1s opacity;
	text-align: center;
	list-style: none;
	z-index: 3;
	${UserContainer}:hover & {
		opacity: 1;
		visibility: visible;
	}

	li {
		&:hover {
			text-decoration: underline;
		}
	}
`;
