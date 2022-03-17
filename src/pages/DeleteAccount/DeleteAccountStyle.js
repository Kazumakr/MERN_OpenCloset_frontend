import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const Title = styled.span`
	font-size: 40px;
	${mobile({ fontSize: "30px" })}
`;
export const Form = styled.form`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	width: 400px;
	${mobile({ width: "70%" })}
`;
export const Label = styled.label`
	margin: 10px 0;
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

export const Gide = styled.p`
	margin: 20px 0;
	width: 600px;
	font-size: 18px;
	text-align: center;
	${mobile({ width: "80%", fontSize: "14px" })}
`;
