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
} from "./ChangePasswordStyle";

const ChangePassword = () => {
	const { user, dispatch } = useContext(Context);
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch({ type: "UPDATE_START" });
		const updatedUser = user;
		updatedUser.password = newPassword;
		await axiosInstance
			.put("/users/" + user._id, updatedUser)
			.then((res) => {
				setSuccess(true);
				setNewPassword("");
				setConfirmPassword("");
				dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: "UPDATE_FAILURE" });
			});
	};

	return (
		<Container>
			<Title>Change Password</Title>
			{success && (
				<span style={{ textAlign: "center", color: "green" }}>
					Password has been changed
				</span>
			)}
			<Form onSubmit={handleSubmit}>
				<Label>New Passowrd</Label>
				<Input
					type="password"
					placeholder="New Password"
					value={newPassword}
					onChange={(event) => setNewPassword(event.target.value)}
				/>

				<Label>Confirm Password</Label>
				<Input
					type="password"
					placeholder="Confirm Password"
					value={confirmPassword}
					onChange={(event) => setConfirmPassword(event.target.value)}
				/>

				{!(newPassword === confirmPassword) && (
					<span style={{ color: "red" }}>Confirma password does not match</span>
				)}
				<Button type="submit" disabled={!(newPassword === confirmPassword)}>
					Change Password
				</Button>
			</Form>
		</Container>
	);
};

export default ChangePassword;
