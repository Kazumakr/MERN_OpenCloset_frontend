import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
`;

export const Title = styled.span`
	font-size: 40px;
	${mobile({ fontSize: "30px" })}
`;
export const Subtitle = styled.p`
	font-size: 18px;
	${mobile({ fontSize: "14px" })}
`;

export const Hr = styled.hr`
	margin: 0 20px 10px 20px;
`;

export const NoFollowing = styled.div`
	display: flex;
	/* justify-content: center; */
	/* align-items: center; */
	height: 400px;
`;
