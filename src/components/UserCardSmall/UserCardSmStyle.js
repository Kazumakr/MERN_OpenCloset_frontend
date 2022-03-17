import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 15px 0;
`;
export const Img = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 15px;

	${tablet({ width: "70px", height: "70px" })}
	${mobile({ width: "50px", height: "50px" })}
`;
export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
`;
export const Name = styled.span`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 5px;
	margin-right: 5px;
`;
export const Follow = styled.span`
	font-size: 14px;
	margin-right: 10px;
`;
export const Bio = styled.span`
	word-wrap: break-word;
`;

export const Button = styled.button`
	color: white;
	background-color: blue;
	border: none;
	padding: 5px;
	width: 70px;
	border-radius: 10px;
	cursor: pointer;
`;
