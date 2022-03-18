import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-top: 10px;
	color: black;

	width: 24%;
	${tablet({ width: "49%" })}
`;
export const ImgContainer = styled.div`
	width: 100%;
	height: 400px;
	${tablet({ height: "500px" })}
	${mobile({ height: "250px" })}
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
export const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px 0;
`;
export const Name = styled.span`
	font-size: 20px;
	${mobile({ fontSize: "14px" })}
`;
export const Price = styled.span`
	font-size: 18px;
	${mobile({ fontSize: "12px" })}
`;
export const Color = styled.span`
	height: 20px;
	width: 20px;
	background-color: ${({ color }) => `${color}`};
	border-radius: 50%;
	display: inline-block;
	${mobile({ width: "15px", height: "15px" })}
`;
export const Likes = styled.span`
	${mobile({ fontSize: "12px" })}
`;
export const Wrapper = styled.div`
	display: flex;
	width: 100%;

	justify-content: space-between;
`;
export const Username = styled.span`
	${mobile({ fontSize: "13px" })}
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;
	padding: 0 10px;
	&:hover {
		opacity: 0.7;
	}
	${mobile({ padding: "3px" })}
`;

export const UserImg = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 15px;
	${mobile({ width: "25px", height: "25px", marginRight: "5px" })}
`;
