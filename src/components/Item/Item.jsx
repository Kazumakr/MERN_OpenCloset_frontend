import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {
	Container,
	Img,
	ItemInfo,
	Name,
	Price,
	Color,
	Likes,
	Username,
	UserInfo,
	Wrapper,
	UserImg,
} from "./ItemStyle";

const Item = ({ item }) => {
	const location = useLocation();
	const path = location.pathname.split("/")[1];
	const publicFolder = "http://localhost:5000/images/";
	return (
		<Container>
			<Img
				src={
					item.images
						? "http://localhost:5000/api/image/" + item.images
						: publicFolder + "NoItemImage.jpg"
				}
			/>
			<Wrapper>
				<ItemInfo>
					<Name>{item.userId.username}</Name>
					{item.price && <Price>${item.price} USD</Price>}
					{item.color && <Color>{item.color}</Color>}
					<Likes>0 Likes</Likes>
				</ItemInfo>
				{path === "" && (
					<Link to={`/${item.userId._id}`} style={{ color: "black" }}>
						<UserInfo>
							<UserImg
								src={
									item.userId.photo
										? "http://localhost:5000/api/image/" + item.userId.photo
										: publicFolder + "NoImage.png"
								}
								alt=""
							/>
							<Username>{item.username}</Username>
						</UserInfo>
					</Link>
				)}
			</Wrapper>
		</Container>
	);
};

export default Item;
