import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 20px;
	justify-content: space-between;

	&:after {
		content: "" "";
		display: block;
		width: 24%;
	}
`;
