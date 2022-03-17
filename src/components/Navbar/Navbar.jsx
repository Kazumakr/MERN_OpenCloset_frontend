import React, { useContext, useEffect, useRef, useState } from "react";

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
	HamburgerContainer,
	MobileNavList,
	MobileNavlistItem,
	Wrapper,
} from "./NavbarStyle";

import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

const Navbar = () => {
	const { user, dispatch } = useContext(Context);
	const [open, setOpen] = useState(false);
	const [show, setShow] = useState(false);
	const ref = useRef();

	const publicFolder = "http://localhost:5000/images/";

	const location = useLocation();
	const path = location.pathname.split("/")[1];
	const navigate = useNavigate();

	useEffect(() => {
		const ClickedOutside = (e) => {
			if (show && ref.current && !ref.current.contains(e.target)) {
				setShow(false);
			}
		};
		document.addEventListener("mousedown", ClickedOutside);
		return () => {
			document.removeEventListener("mousedown", ClickedOutside);
		};
	}, [show]);

	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
		navigate("/");
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
				<Center>
					<NavList>
						<NavListItem>
							<StyledLink to={`${path}/?category=clothing`}>
								Clothing
							</StyledLink>

							<SubList>
								<li>
									<StyledLink to={`${path}/?subcategory=outer`}>
										Outer
									</StyledLink>
								</li>
								<li>
									<StyledLink to={`${path}/?subcategory=tops`}>Tops</StyledLink>
								</li>
								<li>
									<StyledLink to={`${path}/?subcategory=bottoms`}>
										Bottoms
									</StyledLink>
								</li>
							</SubList>
						</NavListItem>
						<NavListItem>
							<StyledLink to={`${path}/?category=accessories`}>
								Accessories
							</StyledLink>

							<SubList>
								<li>
									<StyledLink to={`${path}/?subcategory=bags`}>Bags</StyledLink>
								</li>
								<li>
									<StyledLink to={`${path}/?subcategory=jewelry`}>
										Jewerly
									</StyledLink>
								</li>
								<li>
									<StyledLink to={`${path}/?subcategory=sunglasses`}>
										Sunglass
									</StyledLink>
								</li>
								<li>
									<StyledLink to={`${path}/?subcategory=hats`}>Hats</StyledLink>
								</li>
								<li>
									<StyledLink to={`${path}/?subcategory=wallets`}>
										Wallets
									</StyledLink>
								</li>
								<li>
									<StyledLink to={`${path}/?subcategory=belts`}>
										Belts
									</StyledLink>
								</li>
							</SubList>
						</NavListItem>
						<NavListItem>
							<StyledLink to={`${path}/?category=shoes`}>Shoes</StyledLink>

							<SubList>
								<li>
									<StyledLink to={`${path}/?subcategory=sneakers`}>
										Sneakers
									</StyledLink>
								</li>
								<li>
									<StyledLink to={`${path}/?subcategory=dress`}>
										Dress
									</StyledLink>
								</li>
								<li>
									<StyledLink to={`${path}/?subcategory=sandals`}>
										Sandals
									</StyledLink>
								</li>
								<li>
									<StyledLink to={`${path}/?subcategory=boots`}>
										Boots
									</StyledLink>
								</li>
								<li>
									<StyledLink to={`${path}/?subcategory=heels`}>
										Heels
									</StyledLink>
								</li>
								<li>
									<StyledLink to={`${path}/?subcategory=loafers`}>
										Loafers
									</StyledLink>
								</li>
							</SubList>
						</NavListItem>
					</NavList>
				</Center>
			)}
			{!(user === null) && (
				<Right>
					<NavList
						ref={ref}
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
							<NavListItem>Items</NavListItem>
						</StyledLink>
						<StyledLink to={"/users"}>
							<NavListItem>Users</NavListItem>
						</StyledLink>
						<StyledLink to={"/additem"}>
							<NavListItem>Add</NavListItem>
						</StyledLink>

						<UserContainer onClick={() => setShow(!show)}>
							<Img
								src={
									user?.photo
										? "http://localhost:5000/api/image/" + user.photo
										: publicFolder + "NoImage.png"
								}
							/>
							<span>{user?.username}</span>
							<UserMenu
								style={show ? { display: "block" } : { display: "none" }}
							>
								<li>
									<StyledLink to={`/likeditems`}>Liked Items</StyledLink>
								</li>
								<li>
									<StyledLink to={"/setting"}>Setting</StyledLink>
								</li>
								<li onClick={handleLogout}>Logout</li>
							</UserMenu>
						</UserContainer>
					</NavList>

					<div>
						<HamburgerContainer open={open} onClick={() => setOpen(!open)}>
							<div />
							<div />
							<div />
						</HamburgerContainer>
						<MobileNavList open={open} onClick={() => setOpen(!open)}>
							<MobileNavlistItem>
								<StyledLink to={`${user?._id}`}>
									<Wrapper>Items</Wrapper>
								</StyledLink>
							</MobileNavlistItem>
							<MobileNavlistItem>
								<StyledLink to="/users">
									<Wrapper>Users</Wrapper>
								</StyledLink>
							</MobileNavlistItem>

							<MobileNavlistItem>
								<StyledLink to="/additem">
									<Wrapper>Add</Wrapper>
								</StyledLink>
							</MobileNavlistItem>
							<MobileNavlistItem>
								<StyledLink to="/likeditems">
									<Wrapper>Liked Items</Wrapper>
								</StyledLink>
							</MobileNavlistItem>
							<MobileNavlistItem>
								<StyledLink to="/setting">
									<Wrapper>Setting</Wrapper>
								</StyledLink>
							</MobileNavlistItem>

							<MobileNavlistItem onClick={handleLogout}>
								<Wrapper>Logout</Wrapper>
							</MobileNavlistItem>
						</MobileNavList>
					</div>
				</Right>
			)}
		</Container>
	);
};

export default Navbar;
