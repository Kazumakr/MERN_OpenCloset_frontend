import React from "react";
import { Link } from "react-router-dom";
import { Container, Content, Title, Subtitle, Button } from "./HeroStyle";
const Hero = () => {
	return (
		<Container>
			<Content>
				<Title>OpenCloset</Title>
				<Subtitle>Let's register your items and open your closet</Subtitle>
				<Link to="/additem">
					<Button>Add Item</Button>
				</Link>
			</Content>
		</Container>
	);
};

export default Hero;
