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
	ImgContainer,
} from "./ItemStyle";

const Item = ({ item }) => {
	const location = useLocation();
	const path = location.pathname.split("/")[1];
	const publicFolder = "https://mern-opencloset.herokuapp.com/images/";
	return (
		<Container>
			<ImgContainer>
				<Link to={`/items/${item._id}`}>
					<Img
						src={
							item.images
								? "https://mern-opencloset.herokuapp.com/api/image/" +
								  item.images
								: publicFolder + "NoItemImage.jpg"
						}
					/>
				</Link>
			</ImgContainer>
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
										? "https://mern-opencloset.herokuapp.com/api/image/" +
										  item.user.photo
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
