import React from "react";
import { Link } from "react-router-dom";
import {
	Container,
	Content,
	Title,
	Subtitle,
	Button,
	ButtonText,
} from "./NoFollowingStyle";
const NoFollowing = () => {
	return (
		<Container>
			<Content>
				<Title>No Following user</Title>
				<Subtitle>Follow more users and explore their closet</Subtitle>
				<Link to="/users">
					<Button>
						<ButtonText>DISCOVER</ButtonText>
					</Button>
				</Link>
			</Content>
		</Container>
	);
};

export default NoFollowing;
