import React, { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";

import {
	Container,
	Img,
	UserInfo,
	Name,
	Button,
	Bio,
	Follow,
	Gender,
	HeightNum,
} from "./UsercardStyle";
const Usercard = ({ pageuser }) => {
	const { user } = useContext(Context);
	const [isFollowed, setIsFollowed] = useState(false);
	const [followers, setFollowers] = useState({});

	const publicFolder = "http://localhost:5000/images/";
	useEffect(() => {
		setFollowers(pageuser.followers);
		if (pageuser.followers?.some((follower) => follower._id === user._id)) {
			setIsFollowed(true);
		} else {
			setIsFollowed(false);
		}
	}, [pageuser]);
	const handleFollow = (event) => {
		// event.preventDefault();
		axiosInstance
			.post(`/users/${pageuser._id}/follow`, { userId: user._id })
			.then((res) => {
				setFollowers(res.data.followers);
				setIsFollowed(true);
			})
			.catch((err) => console.log(err));
	};
	const handleUnfollow = (event) => {
		// event.preventDefault();
		axiosInstance
			.post(`/users/${pageuser._id}/unfollow`, { userId: user._id })
			.then((res) => {
				setFollowers(res.data.followers);
				setIsFollowed(false);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Container>
			<Img
				src={
					pageuser?.photo
						? "http://localhost:5000/api/image/" + pageuser.photo
						: publicFolder + "NoImage.png"
				}
			/>
			<UserInfo>
				<div>
					<Name>{pageuser?.username}</Name>
					{/* {!(user._id === pageuser._id) && */}
					{isFollowed ? (
						<Button
							style={
								user._id === pageuser._id
									? { display: "none" }
									: {
											background: "white",
											color: "blue",
											border: "1px blue solid",
									  }
							}
							onClick={handleUnfollow}
						>
							Following
						</Button>
					) : (
						<Button
							onClick={handleFollow}
							style={user._id === pageuser._id ? { display: "none" } : {}}
						>
							Follow
						</Button>
					)}
				</div>
				<div>
					<Follow>{pageuser.following?.length} following</Follow>
					<Follow>{followers?.length} followers</Follow>
				</div>
				<Gender>{pageuser?.gender}</Gender>
				{pageuser?.height && <HeightNum>{pageuser?.height} cm</HeightNum>}
				<Bio>{pageuser?.bio}</Bio>
			</UserInfo>
		</Container>
	);
};

export default Usercard;
