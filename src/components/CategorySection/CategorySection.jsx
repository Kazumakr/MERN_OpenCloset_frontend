import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import {
	Container,
	Title,
	Img,
	Wrapper,
	ImgContainer,
} from "./CategorySectionStyle";
const CategorySection = () => {
	const { user } = useContext(Context);

	return (
		<Container>
			<Wrapper>
				<Link to={`/${user._id}/?category=clothing`}>
					<ImgContainer>
						<Img src="http://localhost:5000/images/clothing.jpg" alt="" />
					</ImgContainer>
					<Title>Clothing</Title>
				</Link>
			</Wrapper>
			<Wrapper>
				<Link to={`/${user._id}/?category=accessories`}>
					<ImgContainer>
						<Img src="http://localhost:5000/images/accessories.jpg" alt="" />
					</ImgContainer>
					<Title>Accessories</Title>
				</Link>
			</Wrapper>
			<Wrapper>
				<Link to={`/${user._id}/?category=shoes`}>
					<ImgContainer>
						<Img src="http://localhost:5000/images/shoes.jpg" alt="" />
					</ImgContainer>
					<Title>Shoes</Title>
				</Link>
			</Wrapper>
		</Container>
	);
};

export default CategorySection;
