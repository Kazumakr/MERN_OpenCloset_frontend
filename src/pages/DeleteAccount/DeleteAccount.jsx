import React, { useContext, useState } from "react";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";
import {
	Container,
	Title,
	Form,
	Label,
	Input,
	Button,
	Annouce,
} from "./DeleteAccountStyle";
const DeleteAccount = () => {
	const { user, dispatch } = useContext(Context);
	const [email, setEmail] = useState("");
	const handleDelete = async () => {
		await axiosInstance
			.delete(`/users/${user._id}`, { data: { userId: user._id } })
			.then((res) => {
				if (user.photo) {
					axiosInstance
						.delete(`/image/${user.photo}`)
						.then()
						.catch((err) => {
							console.log(err);
						});
				}
				dispatch({ type: "LOGOUT" });
				window.location.replace("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<Container>
			<Title>Delete Account</Title>
			<Annouce>
				If you delete your account, you will also delete your all items. <br />
				If it is okay with you, please enter your Email address and press the
				delete button.
			</Annouce>
			<Form onSubmit={handleDelete}>
				<Label>Email</Label>
				<Input
					type="email"
					placeholder="Enter Email"
					onChange={(event) => setEmail(event.target.value)}
				/>
				<Button type="submit" disabled={!(email === user.email)}>
					Delete Account
				</Button>
			</Form>
		</Container>
	);
};

export default DeleteAccount;
