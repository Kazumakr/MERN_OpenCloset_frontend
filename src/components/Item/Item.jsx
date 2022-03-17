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
			<Link to={`/items/${item._id}`}>
				<Img
					src={
						item.images
							? "http://localhost:5000/api/image/" + item.images
							: publicFolder + "NoItemImage.jpg"
					}
				/>
			</Link>
			<Wrapper>
				<Link to={`items/${item._id}`} style={{ color: "black" }}>
					<ItemInfo>
						<Name>{item.name}</Name>
						{item.price && <Price>${item.price} USD</Price>}
						{item.color && <Color color={item.color} />}
						{item.likes?.length > 1 ? (
							<Likes>{item.likes?.length} Likes</Likes>
						) : (
							<Likes>{item.likes?.length} Like</Likes>
						)}
					</ItemInfo>
				</Link>
				{(path === "" || path === "likeditems") && (
					<Link to={`/${item.user._id}`} style={{ color: "black" }}>
						<UserInfo>
							<UserImg
								src={
									item.user.photo
										? "http://localhost:5000/api/image/" + item.user.photo
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
