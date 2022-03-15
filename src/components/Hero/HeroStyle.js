import styled from "styled-components";

export const Container = styled.div`
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("http://localhost:5000/images/BackgroundImage.jpg");
	height: 80vh;

	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`;
export const Content = styled.div`
	text-align: center;
	position: absolute;
	width: 50vw;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Title = styled.span`
	font-size: 60px;
	margin-bottom: 10px;
`;
export const Subtitle = styled.span`
	font-size: 30px;
	margin-bottom: 10px;
`;
export const Button = styled.button`
	font-size: 14px;
	width: 150px;
	padding: 10px;
`;
