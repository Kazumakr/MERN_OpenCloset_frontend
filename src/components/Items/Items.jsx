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
			{/* <Link to={"/items/itemid"} style={{ width: "24%" }}>
				<Item />
			</Link>
			<Link to={"/items/itemid"} style={{ width: "24%" }}>
				<Item />
			</Link>
			<Link to={"/items/itemid"} style={{ width: "24%" }}>
				<Item />
			</Link>
			<Link to={"/items/itemid"} style={{ width: "24%" }}>
				<Item />
			</Link> */}
			{/* <Item />
			<Item />
			<Item />
			<Item />
			<Item /> */}
		</Container>
	);
};

export default Items;
