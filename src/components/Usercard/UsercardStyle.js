import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 15px 0;
`;
export const Img = styled.img`
	width: 140px;
	height: 140px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 15px;
	${mobile({ width: "80px", height: "80px" })}
`;
export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 250px;
	${mobile({ width: "170px" })}
`;
export const Name = styled.span`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 5px;
	margin-right: 10px;
	${mobile({ fontSize: "16px" })}
`;

export const Button = styled.button`
	color: white;
	background-color: blue;
	border: none;
	padding: 5px;
	width: 80px;
	border-radius: 10px;
	cursor: pointer;
	${mobile({ fontSize: "10px", padding: "3px", width: "70px" })}
`;
export const Follow = styled.span`
	font-size: 14px;
	margin-right: 10px;
	cursor: pointer;
	${mobile({ fontSize: "12px" })}
`;
export const Gender = styled.span`
	font-size: 14px;
	margin: 5px 0;
	${mobile({ fontSize: "12px", margin: "0" })}
`;
export const HeightNum = styled.span`
	font-size: 14px;
	margin-bottom: 5px;
	${mobile({ fontSize: "12px" })}
`;

export const Bio = styled.span`
	width: 100%;
	word-wrap: break-word;
	${mobile({ fontSize: "12px" })}
`;
