import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";
import {
	Container,
	Img,
	UserInfo,
	Name,
	Bio,
	Follow,
	Button,
} from "./UserCardSmStyle";
const UsercardSm = ({ otheruser }) => {
	const publicFolder = "http://localhost:5000/images/";
	const { user } = useContext(Context);
	const [isFollowed, setIsFollowed] = useState(false);
	const [followers, setFollowers] = useState({});
	useEffect(() => {
		setFollowers(otheruser.followers);
		if (otheruser.followers?.some((follower) => follower._id === user._id)) {
			setIsFollowed(true);
		} else {
			setIsFollowed(false);
		}
	}, [otheruser]);
	const handleFollow = (event) => {
		// event.preventDefault();
		axiosInstance
			.post(`/users/${otheruser._id}/follow`, { userId: user._id })
			.then((res) => {
				setFollowers(res.data.followers);
				setIsFollowed(true);
			})
			.catch((err) => console.log(err));
	};
	const handleUnfollow = (event) => {
		// event.preventDefault();
		axiosInstance
			.post(`/users/${otheruser._id}/unfollow`, { userId: user._id })
			.then((res) => {
				setFollowers(res.data.followers);
				setIsFollowed(false);
			})
			.catch((err) => console.log(err));
	};
	return (
		<Container>
			<Link to={`/${user._id}`}>
				<Img
					src={
						otheruser.photo
							? "http://localhost:5000/api/image/" + otheruser.photo
							: publicFolder + "NoImage.png"
					}
					alt=""
				/>
			</Link>
			<UserInfo>
				<div>
					<Link to={`/${otheruser._id}`}>
						<Name>{otheruser.username}</Name>
					</Link>
					{isFollowed ? (
						<Button
							style={
								user._id === otheruser._id
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
							style={user._id === otheruser._id ? { display: "none" } : {}}
						>
							Follow
						</Button>
					)}
				</div>
				<div>
					<Follow>{otheruser.following?.length} following</Follow>
					<Follow>{followers?.length} followers</Follow>
				</div>

				<Bio>{otheruser.bio}</Bio>
			</UserInfo>
		</Container>
	);
};

export default UsercardSm;
