import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-top: 10px;
	cursor: pointer;
	color: black;
`;

export const Img = styled.img`
	width: 100%;
`;
export const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	height: 100px;
	margin-top: 10px;
`;
export const Name = styled.span`
	font-size: 20px;
`;
export const Price = styled.span`
	font-size: 18px;
`;
export const Color = styled.span``;
export const Likes = styled.span``;
export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;
export const Username = styled.span``;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
	height: 35px;
	margin-top: 10px;
	padding: 0 10px;
	&:hover {
		opacity: 0.7;
	}
`;

export const UserImg = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 15px;
`;
