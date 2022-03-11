import React, { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";
import {
	Container,
	Title,
	Form,
	Label,
	Input,
	Button,
} from "./ChangePasswordStyle";

const ChangePassword = () => {
	const { user, dispatch } = useContext(Context);
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = async () => {
		dispatch({ type: "UPDATE_START" });
		const updatedUser = user;
		updatedUser.password = newPassword;
		await axiosInstance
			.put("/users/" + user._id, updatedUser)
			.then((res) => {
				dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: "UPDATE_FAILURE" });
			});
	};
	return (
		<Container>
			<Title>Change Password</Title>
			<Form onSubmit={handleSubmit}>
				<Label>New Passowrd</Label>
				<Input
					type="password"
					placeholder="New Password"
					onChange={(event) => setNewPassword(event.target.value)}
				/>
				{newPassword}
				<Label>Confirm Password</Label>
				<Input
					type="password"
					placeholder="Confirm Password"
					onChange={(event) => setConfirmPassword(event.target.value)}
				/>
				{confirmPassword}
				{!(newPassword === confirmPassword) && <span>not match</span>}
				<Button type="submit" disabled={!(newPassword === confirmPassword)}>
					Change Password
				</Button>
			</Form>
		</Container>
	);
};

export default ChangePassword;
