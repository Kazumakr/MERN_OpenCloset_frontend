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
	StyledLink,
} from "./NavbarStyle";

import { useLocation } from "react-router-dom";
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
				<StyledLink to={"/"}>
					<Logo>OPEN CLOSET</Logo>
				</StyledLink>
			</Left>
			{user == null ||
			path === "" ||
			path === "setting" ||
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
							<StyledLink to={`${path}/?category=clothing`}>
								<li>Clothing</li>
							</StyledLink>
							<SubList>
								<StyledLink to={`${path}/?subcategory=outer`}>
									<li>Outer</li>
								</StyledLink>
								<StyledLink to={`${path}/?subcategory=tops`}>
									<li>Tops</li>
								</StyledLink>
								<StyledLink to={`${path}/?subcategory=bottoms`}>
									<li>Bottoms</li>
								</StyledLink>
							</SubList>
						</NavListItem>
						<NavListItem>
							<StyledLink to={`${path}/?category=accessories`}>
								<li>Accessories</li>
							</StyledLink>
							<SubList>
								<StyledLink to={`${path}/?subcategory=bags`}>
									<li>Bags</li>
								</StyledLink>
								<StyledLink to={`${path}/?subcategory=jewelry`}>
									<li>Jewerly</li>
								</StyledLink>
								<StyledLink to={`${path}/?subcategory=sunglasses`}>
									<li>Sunglass</li>
								</StyledLink>
								<StyledLink to={`${path}/?subcategory=hats`}>
									<li>Hats</li>
								</StyledLink>
								<StyledLink to={`${path}/?subcategory=wallets`}>
									<li>Wallets</li>
								</StyledLink>
								<StyledLink to={`${path}/?subcategory=belts`}>
									<li>Belts</li>
								</StyledLink>
							</SubList>
						</NavListItem>
						<NavListItem>
							<StyledLink to={`${path}/?category=shoes`}>
								<li>Shoes</li>
							</StyledLink>
							<SubList>
								<StyledLink to={`${path}/?subcategory=sneakers`}>
									<li>Sneakers</li>
								</StyledLink>
								<StyledLink to={`${path}/?subcategory=dress`}>
									<li>Dress</li>
								</StyledLink>
								<StyledLink to={`${path}/?subcategory=sandals`}>
									<li>Sandals</li>
								</StyledLink>
								<StyledLink to={`${path}/?subcategory=boots`}>
									<li>Boots</li>
								</StyledLink>
								<StyledLink to={`${path}/?subcategory=heels`}>
									<li>Heels</li>
								</StyledLink>
								<StyledLink to={`${path}/?subcategory=loafers`}>
									<li>Loafers</li>
								</StyledLink>
							</SubList>
						</NavListItem>
					</NavList>
				</Center>
			)}
			{!(user === null) && (
				<Right>
					<NavList
						style={
							path === "" ||
							path === "setting" ||
							path === "users" ||
							path === "additem" ||
							path === "items"
								? { justifyContent: "flex-end", paddingRight: "20px" }
								: { justifyContent: "center" }
						}
					>
						<StyledLink to={`${user?._id}`}>
							<NavListItem>My Items</NavListItem>
						</StyledLink>
						<StyledLink to={"/users"}>
							<NavListItem>Users</NavListItem>
						</StyledLink>
						<StyledLink to={"/additem"}>
							<NavListItem>Add</NavListItem>
						</StyledLink>
						{/* <StyledLink to={"/login"}> */}
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
								<StyledLink to={"/setting"}>
									<li>Setting</li>
								</StyledLink>
								<li onClick={handleLogout}>Logout</li>
							</UserMenu>
						</UserContainer>
						{/* </StyledLink> */}
					</NavList>
				</Right>
			)}
		</Container>
	);
};

export default Navbar;
