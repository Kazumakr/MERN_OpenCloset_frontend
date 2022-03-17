import styled from "styled-components";

import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 20px;
	justify-content: space-between;
	${mobile({ margin: "0 10px" })}

	&:after {
		content: "" "";
		display: block;
		width: 24%;
		${mobile({ width: "49%" })}
		${tablet({ width: "49%" })}
	}
`;
