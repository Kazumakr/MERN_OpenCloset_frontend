import styled from "styled-components";

export const Container = styled.div`
	height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const Title = styled.span`
	font-size: 50px;
`;
export const Form = styled.form`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	width: 400px;
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
