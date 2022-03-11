import React, { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import { Container, Title, Form, Label, Input, Button } from "./LoginStyle";

import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";

const Login = () => {
	const userRef = useRef();
	const passwordRef = useRef();
	const { dispatch, isFetching } = useContext(Context);

	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch({ type: "LOGIN_START" });
		await axiosInstance
			.post("/auth/login", {
				email: userRef.current.value,
				password: passwordRef.current.value,
			})
			.then((res) => {
				dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: "LOGIN_FAILURE" });
			});
	};
	return (
		<Container>
			<Title>Login</Title>
			<Form onSubmit={handleSubmit}>
				<Label>Email</Label>
				<Input type="email" placeholder="Email" ref={userRef} />
				<Label>Password</Label>
				<Input type="password" placeholder="Password" ref={passwordRef} />
				<Button type="submit" disabled={isFetching}>
					Login
				</Button>
				<Link to="/signup">
					<Button>SignUp</Button>
				</Link>
			</Form>
		</Container>
	);
};

export default Login;
