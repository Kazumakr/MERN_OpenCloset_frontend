import React, { useContext } from "react";

import {
	Container,
	Left,
	Center,
	Right,
	Logo,
	NavList,
	NavListItem,
	SubList,
	Img,
	UserMenu,
	UserContainer,
} from "./NavbarStyle";

import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";

const Navbar = () => {
	const { user, dispatch } = useContext(Context);
	const publicFolder = "http://localhost:5000/images/";

	const location = useLocation();
	const path = location.pathname.split("/")[1];

	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};
	return (
		<Container>
			<Left>
				<Link to={"/"}>
					<Logo>OPEN CLOSET</Logo>
				</Link>
			</Left>
			{path === "setting" ||
			path === "users" ||
			path === "additem" ||
			path === "items" ? (
				<Center style={{ display: "none" }}></Center>
			) : (
				<Center
					style={
						path === "setting" ||
						path === "users" ||
						path === "additem" ||
						path === "items"
							? { display: "none" }
							: { display: "block" }
					}
				>
					<NavList>
						<NavListItem>
							<Link to={`${path}/?category=clothing`}>
								<li>Clothing</li>
							</Link>
							<SubList>
								<Link to={`${path}/?subcategory=outer`}>
									<li>Outer</li>
								</Link>
								<Link to={`${path}/?subcategory=tops`}>
									<li>Tops</li>
								</Link>
								<li>
									<a href="#">Bottoms</a>
								</li>
							</SubList>
						</NavListItem>
						<NavListItem>
							<Link to={`${path}/?category=accessories`}>
								<li>Accessories</li>
							</Link>
							<SubList>
								<li>
									<a href="#">Outer</a>
								</li>
								<li>
									<a href="#">Tops</a>
								</li>
								<li>
									<a href="#">Bottoms</a>
								</li>
							</SubList>
						</NavListItem>
						<NavListItem>
							<Link to={`${path}/?category=shoes`}>
								<li>Shoes</li>
							</Link>
							<SubList>
								<Link to={`${path}/?subcategory=outer`}>
									<li>Outer</li>
								</Link>
								<li>
									<a href="#">Tops</a>
								</li>
								<li>
									<a href="#">Bottoms</a>
								</li>
							</SubList>
						</NavListItem>
					</NavList>
				</Center>
			)}
			<Right>
				<NavList
					style={
						path === "setting" ||
						path === "users" ||
						path === "additem" ||
						path === "items"
							? { justifyContent: "flex-end", paddingRight: "20px" }
							: { justifyContent: "center" }
					}
				>
					<Link to={`${user._id}`}>
						<NavListItem>My Items</NavListItem>
					</Link>
					<Link to={"/users"}>
						<NavListItem>Users</NavListItem>
					</Link>
					<Link to={"/additem"}>
						<NavListItem>Add</NavListItem>
					</Link>
					{/* <Link to={"/login"}> */}
					{/* <NavListItem>Log In</NavListItem> */}
					<UserContainer>
						<Img
							src={
								user?.photo
									? "http://localhost:5000/api/image/" + user.photo
									: publicFolder + "NoImage.png"
							}
						/>
						<span>{user?.username}</span>
						<UserMenu>
							<Link to={"/setting"}>
								<li>Setting</li>
							</Link>
							<li onClick={handleLogout}>Logout</li>
						</UserMenu>
					</UserContainer>
					{/* </Link> */}
				</NavList>
			</Right>
		</Container>
	);
};

export default Navbar;
