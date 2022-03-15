import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 10px;
`;
export const Wrapper = styled.div`
	width: 33%;
	height: 500px;
	position: relative;
`;
export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 0.7;
	&:hover {
		opacity: 1;
	}
`;

export const Title = styled.span`
	font-size: 40px;
	color: white;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const ImgContainer = styled.div`
	background-color: black;
	height: 100%;
`;
