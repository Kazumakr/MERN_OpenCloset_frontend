import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: calc(100vh - 120px);
`;
export const Wrapper = styled.div`
	padding: 15px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 90%;
	${tablet({ width: "100%" })}
	${mobile({ justifyContent: "center" })};
`;

export const Title = styled.span`
	font-size: 34px;
	margin-top: 10px;
	${mobile({ fontSize: "25px" })}
`;
