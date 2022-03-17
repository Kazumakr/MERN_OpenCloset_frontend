import React, { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";
import ModalFollowing from "../ModalFollowing/ModalFollowing";
import ModalFollower from "../ModalFollower/ModalFollower";

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
	const { user, dispatch } = useContext(Context);
	const [isFollowed, setIsFollowed] = useState(false);
	const [followers, setFollowers] = useState({});
	const [showFollowing, setShowFollowing] = useState(false);
	const [showFollower, setShowFollower] = useState(false);

	const publicFolder = "https://mern-opencloset.herokuapp.com/images/";
	useEffect(() => {
		setFollowers(pageuser.followers);
		if (pageuser.followers?.some((follower) => follower._id === user._id)) {
			setIsFollowed(true);
		} else {
			setIsFollowed(false);
		}
	}, [pageuser, user._id]);
	const handleFollow = () => {
		dispatch({ type: "UPDATE_START" });
		axiosInstance
			.post(`/users/${pageuser._id}/follow`, { userId: user._id })
			.then((res) => {
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
			.post(`/users/${pageuser._id}/unfollow`, { userId: user._id })
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
			<Img
				src={
					pageuser?.photo
						? "https://mern-opencloset.herokuapp.com/api/image/" +
						  pageuser.photo
						: publicFolder + "NoImage.png"
				}
			/>
			<UserInfo>
				<div>
					<Name>{pageuser?.username}</Name>
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
					<Follow onClick={() => setShowFollowing(true)}>
						{pageuser.following?.length} following
					</Follow>
					<Follow onClick={() => setShowFollower(true)}>
						{followers?.length} followers
					</Follow>

					<ModalFollowing
						showFollowing={showFollowing}
						setShowFollowing={setShowFollowing}
						following={pageuser.following}
					/>
					<ModalFollower
						showFollower={showFollower}
						setShowFollower={setShowFollower}
						followers={pageuser.followers}
						handleFollow={handleFollow}
						handleUnfollow={handleUnfollow}
					/>
				</div>
				<Gender>{pageuser?.gender}</Gender>
				{pageuser?.height && <HeightNum>{pageuser?.height} cm</HeightNum>}
				<Bio>{pageuser?.bio}</Bio>
			</UserInfo>
		</Container>
	);
};

export default Usercard;
