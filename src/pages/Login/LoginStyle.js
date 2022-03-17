import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
	height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("https://mern-opencloset.herokuapp.com/images/LoginBackground.jpg");
	background-size: cover;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: rgba(1, 1, 1, 0.5);
	padding: 20px;
	border-radius: 10px;
	${mobile({ width: "80%" })}
`;
export const Title = styled.span`
	font-size: 40px;
	color: white;
	${mobile({ fontSize: "30px" })}
`;
export const Form = styled.form`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	width: 400px;
	${mobile({ width: "90%" })}
`;
export const Label = styled.label`
	margin: 10px 0;
	color: white;
`;
export const Input = styled.input`
	padding: 10px;
	background-color: lightgray;
	border: none;
	border-radius: 10px;
`;
export const Button = styled.button`
	margin-top: 20px;
	cursor: pointer;
	background-color: lightcoral;
	color: white;
	padding: 10px;
	border: none;
	border-radius: 10px;
	text-align: center;
	width: 100%;

	:disabled {
		cursor: not-allowed;
		opacity: 0.7;
	}
`;
