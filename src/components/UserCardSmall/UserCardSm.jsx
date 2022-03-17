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
	const publicFolder = "https://mern-opencloset.herokuapp.com/images/";
	const { user, dispatch } = useContext(Context);
	const [isFollowed, setIsFollowed] = useState(false);
	const [followers, setFollowers] = useState({});
	const [modStr, setModStr] = useState("");
	useEffect(() => {
		setFollowers(otheruser.followers);
		if (otheruser.followers?.some((follower) => follower._id === user?._id)) {
			setIsFollowed(true);
		} else {
			setIsFollowed(false);
		}

		if (otheruser.bio?.length > 20) {
			setModStr(otheruser.bio.substring(0, 20) + "...");
		}
	}, [otheruser, user._id]);
	const handleFollow = () => {
		dispatch({ type: "UPDATE_START" });
		axiosInstance
			.post(`/users/${otheruser._id}/follow`, { userId: user._id })
			.then((res) => {
				// setFollowers(res.data.followers);
				setFollowers([...followers, res.data]);

				setIsFollowed(true);
				dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: "UPDATE_FAILURE" });

				console.log(err);
			});
	};
	const handleUnfollow = () => {
		dispatch({ type: "UPDATE_START" });

		axiosInstance
			.post(`/users/${otheruser._id}/unfollow`, { userId: user._id })
			.then((res) => {
				setFollowers(followers.filter((follower) => follower._id !== user._id));

				setIsFollowed(false);
				dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: "UPDATE_FAILURE" });

				console.log(err);
			});
	};

	return (
		<Container>
			<Link to={`/${otheruser._id}`}>
				<Img
					src={
						otheruser.photo
							? "https://mern-opencloset.herokuapp.com/api/image/" +
							  otheruser.photo
							: publicFolder + "NoImage.png"
					}
					alt=""
				/>
			</Link>
			<UserInfo>
				<div>
					<Link to={`/${otheruser._id}`} style={{ color: "black" }}>
						<Name>{otheruser.username}</Name>
					</Link>
					{isFollowed ? (
						<Button
							style={
								user?._id === otheruser._id
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
							style={user?._id === otheruser._id ? { display: "none" } : {}}
						>
							Follow
						</Button>
					)}
				</div>
				<div>
					<Follow>{otheruser.following?.length} following</Follow>
					<Follow>{followers?.length} followers</Follow>
				</div>

				<Bio id="bio">{modStr}</Bio>
			</UserInfo>
		</Container>
	);
};

export default UsercardSm;
