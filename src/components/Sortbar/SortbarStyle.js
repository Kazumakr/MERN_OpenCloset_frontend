import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 20px;
`;
export const Left = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`;
export const Right = styled.div``;
export const Input = styled.input`
	padding: 5px;
	font-family: FontAwesome;
`;
export const Span = styled.span`
	font-size: 18px;
	margin-right: 20px;
	cursor: pointer;
`;
export const Hr = styled.hr`
	margin: 15px 0;
	opacity: 0.5;
	width: 90%;
	align-self: center;
`;

export const FilterMenu = styled.div`
	width: 200px;
	height: 150px;
	background-color: white;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	position: absolute;
	top: 45px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 10px;
`;
