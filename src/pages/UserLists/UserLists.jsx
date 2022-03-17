import React, { useContext, useEffect, useState } from "react";
import UsercardSm from "../../components/UserCardSmall/UserCardSm";
import { Container, Wrapper, Title } from "./UserListsStyle";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";
import { useLocation } from "react-router";
import UserSortbar from "../../components/UserSortbar/UserSortbar";

const UserLists = () => {
	const [users, setUsers] = useState([]);

	const { user } = useContext(Context);
	const { search } = useLocation();

	useEffect(() => {
		axiosInstance
			.get("/users" + search)
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [search]);

	return (
		<Container>
			<Title>Users</Title>

			<UserSortbar />
			<Wrapper>
				{users.map((otheruser, index) => {
					return !(otheruser?._id === user?._id) ? (
						<UsercardSm key={index} otheruser={otheruser} />
					) : null;
				})}
			</Wrapper>
		</Container>
	);
};

export default UserLists;
