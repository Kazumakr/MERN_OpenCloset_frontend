import React from "react";
import {
	Container,
	Img,
	ItemInfo,
	Name,
	Price,
	Color,
	Likes,
} from "./ItemStyle";

const Item = ({ item }) => {
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
			<ItemInfo>
				<Name>{item.name}</Name>
				{item.price && <Price>${item.price} USD</Price>}
				{item.color && <Price>{item.color}</Price>}
				<Likes>0 Likes</Likes>
			</ItemInfo>
		</Container>
	);
};

export default Item;
