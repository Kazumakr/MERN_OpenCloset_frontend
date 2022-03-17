import React, { useState } from "react";
import {
	Container,
	Wrapper,
	Title,
	Form,
	Label,
	Input,
	Button,
} from "./SignupStyle";

import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";

const Signup = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError(false);
		if (password === confirmPassword) {
			await axiosInstance
				.post("/auth/signup", { username, email, password })
				.then((res) => {
					res.data && window.location.replace("/login");
				})
				.catch((err) => {
					setError(true);
				});
		} else {
			setError(true);
		}
	};

	return (
		<Container>
			<Wrapper>
				<Title>SignUp</Title>
				{error && (
					<span style={{ color: "red", marginTop: "10px" }}>
						Something went wrong
					</span>
				)}
				<Form onSubmit={handleSubmit}>
					<Label>Username</Label>
					<Input
						type="text"
						placeholder="Username"
						required
						onChange={(event) => setUsername(event.target.value)}
					/>
					<Label>Email</Label>
					<Input
						type="email"
						placeholder="Email"
						required
						onChange={(event) => setEmail(event.target.value)}
					/>
					<Label>Password</Label>
					<Input
						type="password"
						placeholder="Password"
						required
						onChange={(event) => setPassword(event.target.value)}
					/>
					<Label>Confirm Password</Label>
					<Input
						type="password"
						placeholder="Password"
						onChange={(event) => setConfirmPassword(event.target.value)}
					/>
					{!(password === confirmPassword) && (
						<span style={{ color: "red", marginTop: "10px" }}>
							Confirma password does not match
						</span>
					)}
					<Button type="submit">SignUp</Button>
					<Link to="/login">
						<Button>Login</Button>
					</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Signup;
