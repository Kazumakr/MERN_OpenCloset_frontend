import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import {
	Overlay,
	Content,
	UserContainer,
	Img,
	Name,
	Wrapper,
	Hr,
} from "./ModalFollowingStyle";

const ModalFollowing = ({ showFollowing, setShowFollowing, following }) => {
	const navigate = useNavigate();
	const publicFolder = "http://localhost:5000/images/";

	if (showFollowing) {
		return (
			<Overlay onClick={() => setShowFollowing(false)}>
				<Content onClick={(event) => event.stopPropagation()}>
					<Wrapper>
						<h2>Following</h2>
						<AiOutlineClose
							style={{ fontSize: "18px", cursor: "pointer" }}
							onClick={() => {
								setShowFollowing(false);
							}}
						/>
					</Wrapper>
					<Hr />
					{following?.map((followinguser, index) => (
						<UserContainer key={index}>
							<Img
								src={
									followinguser?.photo
										? "http://localhost:5000/api/image/" + followinguser.photo
										: publicFolder + "NoImage.png"
								}
							/>

							<Name
								onClick={() => {
									navigate(`/${followinguser._id}`);
									setShowFollowing(false);
								}}
							>
								{followinguser.username}
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

export default ModalFollowing;
