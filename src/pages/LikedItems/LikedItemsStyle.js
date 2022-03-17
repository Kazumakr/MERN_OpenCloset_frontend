import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	min-height: calc(100vh - 120px);
`;

export const Title = styled.h1`
	font-size: 35px;
	text-align: center;
	margin-top: 20px;
	${mobile({ fontSize: "25px" })}
`;
