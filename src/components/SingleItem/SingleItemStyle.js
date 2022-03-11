import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
`;
export const ImgContainer = styled.div`
	padding: 20px;
`;
export const Img = styled.img`
	width: 500px;
	height: 100%;
	object-fit: cover;
`;
export const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 500px;
	margin-top: 20px;
	padding: 10px;
`;
export const Name = styled.span`
	font-size: 24px;
	margin-bottom: 10px;
`;
export const Price = styled.span`
	margin-bottom: 10px;
`;
export const Color = styled.span`
	margin-bottom: 10px;
`;
export const Size = styled.span`
	margin-bottom: 10px;
`;
export const Brand = styled.span`
	margin-bottom: 10px;
`;
export const Fabric = styled.span`
	margin-bottom: 10px;
`;
export const Note = styled.span`
	margin-bottom: 10px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
export const CommentContainer = styled.div`
	display: flex;
	margin: 5px 0;
	align-items: center;
`;
export const CommentInput = styled.input`
	color: gray;
	margin-top: 10px;
	margin-bottom: 10px;
	height: 30px;
	border: none;
	border-bottom: 1px solid lightgray;

	&:focus {
		outline: none;
		border-bottom: 2px solid black;
	}
`;

export const CommentButton = styled.button`
	align-self: flex-end;
	width: 80px;
	padding: 7px;
	background: blue;
	color: white;
	border: none;
	border-radius: 5px;
`;

export const Edit = styled.div`
	font-size: 16px;
	align-self: flex-end;
`;
