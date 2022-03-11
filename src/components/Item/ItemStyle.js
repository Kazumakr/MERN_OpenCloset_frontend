import styled from "styled-components";

export const Container = styled.div`
	/* background-color: gray; */
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	/* width: 270px; */
	/* width: 24%; */
	/* height: 500px; */
	/* margin: 0px 25px 40px 25px; */
	/* padding: 10px; */
	margin-top: 10px;
	/* &:hover {
		transform: scale(1.05);
	} */
	cursor: pointer;
	color: black;
`;

export const Img = styled.img`
	width: 100%;
	/* height: 100%; */
	/* object-fit: cover; */
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
