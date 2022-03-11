import React from "react";
import {
	CategoryItem,
	CategoryList,
	Container,
	CategoryTitle,
} from "./SubMenuStyle";
const SubMenu = () => {
	return (
		<Container>
			<CategoryTitle>Clothing</CategoryTitle>
			<CategoryList>
				<CategoryItem>Outer</CategoryItem>
				<CategoryItem>Bottoms</CategoryItem>
				<CategoryItem>Tops</CategoryItem>
			</CategoryList>
		</Container>
	);
};

export default SubMenu;
