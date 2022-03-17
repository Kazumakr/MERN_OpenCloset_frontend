import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("http://localhost:5000/images/NoFollowing.jpg");
	height: 50vh;

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
	font-size: 35px;
	font-weight: bold;
	margin-bottom: 10px;
	${tablet({ fontSize: "30px" })}
	${mobile({ fontSize: "20px" })}
`;
export const Subtitle = styled.span`
	font-size: 24px;
	margin-bottom: 15px;
	${tablet({ fontSize: "20px" })}
	${mobile({ fontSize: "14px" })}
`;
export const ButtonText = styled.span`
	position: relative;
	color: white;
	font-size: 14px;
	z-index: 3;
	${mobile({ fontSize: "10px" })}
`;
export const Button = styled.button`
	width: 150px;
	padding: 10px;
	background: none;
	border: 2px solid white;
	transition: all ease 0.2s;

	position: relative;
	overflow: hidden;

	&::before {
		content: "" "";
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 2;
		background: white;
		width: 100%;
		height: 0;

		transition: 0.3s cubic-bezier(0.8, 0, 0.2, 1) 0s;
	}
	&:hover {
		${ButtonText} {
			color: black;
		}
		::before {
			height: 100%;
		}
	}

	${mobile({ width: "80px", padding: "7px" })}
`;
