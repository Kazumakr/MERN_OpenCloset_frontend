import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;

	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Content = styled.div`
	z-index: 2;
	width: 240px;
	padding: 1em;
	background: #fff;
	border-radius: 10px;
`;

export const Title = styled.span`
	font-size: 24px;
	font-weight: bold;
`;
export const UserContainer = styled.div`
	display: flex;
	align-items: center;

	padding: 5px 0;
`;

export const Img = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	object-fit: cover;
	margin: 0 10px;
`;

export const Name = styled.span`
	cursor: pointer;
	font-weight: bold;
	&:hover {
		text-decoration: underline;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Hr = styled.hr`
	margin: 10px 0;
`;
