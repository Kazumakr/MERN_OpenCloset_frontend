import React, { useContext, useEffect, useState } from "react";
import UsercardSm from "../../components/UserCardSmall/UserCardSm";
import { Container, Wrapper } from "./UserListsStyle";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";
const UserLists = () => {
	const [users, setUsers] = useState([]);
	const { user } = useContext(Context);
	useEffect(() => {
		axiosInstance
			.get("/users")
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<Container>
			<h2>Users</h2>
			<Wrapper>
				{users.map((otheruser, index) => (
					<>
						{!(otheruser?._id === user?._id) && (
							<UsercardSm key={index} otheruser={otheruser} />
						)}
					</>
				))}
			</Wrapper>
		</Container>
	);
};

export default UserLists;
