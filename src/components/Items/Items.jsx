import React from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import { Container } from "./ItemsStyle";
const Items = ({ items }) => {
	return (
		<Container>
			{items.map((item, index) => (
				<Link key={index} to={`/items/${item._id}`} style={{ width: "24%" }}>
					<Item item={item} />
				</Link>
			))}
		</Container>
	);
};

export default Items;
