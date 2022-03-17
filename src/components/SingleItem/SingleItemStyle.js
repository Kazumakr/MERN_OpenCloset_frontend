import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 80%;
	margin: 0 auto;
	${mobile({ width: "90%" })}
	${tablet({ flexDirection: "column" })}
`;
export const ImgContainer = styled.div`
	padding: 20px;
	display: flex;
	justify-content: center;
	flex: 1;
`;
export const Img = styled.img`
	width: 90%;
	height: 100%;
	object-fit: cover;

	${tablet({ width: "100%" })}
`;
export const ItemInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	width: 50%;
	margin-top: 20px;
	padding: 10px;
	${tablet({ width: "100%" })}
`;
export const Name = styled.span`
	font-size: 24px;
	margin-bottom: 10px;
`;
export const Desc = styled.span`
	margin-bottom: 10px;
`;

export const Note = styled.span`
	margin-bottom: 10px;
	width: 100%;
	word-wrap: break-word;
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
