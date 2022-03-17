import React from "react";

import Item from "../Item/Item";
import { Container } from "./ItemsStyle";
const Items = ({ items }) => {
	return (
		<Container>
			{items.map((item, index) => (
				<Item item={item} key={index} />
			))}
		</Container>
	);
};

export default Items;
