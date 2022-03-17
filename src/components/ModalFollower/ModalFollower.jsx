import React from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";

import {
	Overlay,
	Content,
	Title,
	UserContainer,
	Img,
	Name,
	Wrapper,
	Hr,
} from "./ModalFollowerStyle";

const ModalFollower = ({ showFollower, setShowFollower, followers }) => {
	const navigate = useNavigate();
	const publicFolder = "http://localhost:5000/images/";

	if (showFollower) {
		return (
			<Overlay onClick={() => setShowFollower(false)}>
				<Content onClick={(event) => event.stopPropagation()}>
					<Wrapper>
						<Title>Followers</Title>
						<AiOutlineClose
							style={{ fontSize: "18px", cursor: "pointer" }}
							onClick={() => {
								setShowFollower(false);
							}}
						/>
					</Wrapper>
					<Hr />
					{followers?.map((follower, index) => (
						<UserContainer key={index}>
							<Img
								src={
									follower?.photo
										? "http://localhost:5000/api/image/" + follower.photo
										: publicFolder + "NoImage.png"
								}
							/>

							<Name
								onClick={() => {
									navigate(`/${follower._id}`);
									setShowFollower(false);
								}}
							>
								{follower.username}
							</Name>
						</UserContainer>
					))}
				</Content>
			</Overlay>
		);
	} else {
		return null;
	}
};

export default ModalFollower;
