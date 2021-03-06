import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 20px;
	${mobile({ flexDirection: "column-reverse", alignItems: "unset" })}
`;
export const Left = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	${mobile({ justifyContent: "space-between" })}
`;
export const Right = styled.div``;
export const Input = styled.input`
	padding: 5px;
	font-family: FontAwesome;
	border: none;
	border-bottom: 1px solid lightgray;
	${mobile({ width: "50%" })}
	&:focus {
		outline: none;
		border-bottom: 2px solid black;
	}
`;

export const Hr = styled.hr`
	margin: 15px 0;
	opacity: 0.5;
	width: 90%;
	align-self: center;
`;

export const Select = styled.select`
	color: gray;
	margin-top: 10px;
	width: 70px;

	height: 30px;
	border: none;
	${mobile({ fontSize: "12px" })}
`;
export const MobileSelect = styled.select`
	color: gray;
	margin-top: 10px;
	width: 70px;
	font-size: 14px;
	height: 30px;
	border: none;
	display: none;
	${tablet({ display: "block" })}
	${mobile({ fontSize: "12px" })}
`;

export const Option = styled.option``;

export const MultipleSelection = styled.div`
	width: 60px;
	margin-right: 5px;
`;

export const SelectBox = styled.div`
	position: relative;
	select {
		width: 100%;
	}
`;

export const OverSelect = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
`;

export const CheckBoxes = styled.div`
	display: none;
	border: 1px lightgray solid;
	padding: 10px;
	width: 160px;
	position: absolute;
	background-color: white;
	flex-wrap: wrap;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 3px;
	width: 50%;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;

export const ClearButton = styled.button`
	background-color: white;
	border-radius: 5px;
	border: 1px solid gray;
	margin-top: 10px;
	padding: 3px 10px;
	&:hover {
		background-color: black;
		color: white;
		cursor: pointer;
	}
`;
