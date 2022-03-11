import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	/* background-color: yellow; */
	/* padding: 0 20px; */
	margin: 0 20px;
	justify-content: space-between;

	&:after {
		content: "" "";
		display: block;
		width: 24%;
	}
`;
