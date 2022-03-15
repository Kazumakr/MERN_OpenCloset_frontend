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

export const Hr = styled.hr`
	margin: 15px 0;
	opacity: 0.5;
	width: 90%;
	align-self: center;
`;

export const Select = styled.select`
	color: gray;
	margin-top: 10px;

	height: 30px;
	border: none;
`;

export const Option = styled.option``;

export const MultipleSelection = styled.div`
	width: 60px;
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
	padding: 5px;
	width: 80px;
	position: absolute;
	background-color: white;
	/* top: 100%;
	left: 100%; */
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 3px;

	&:hover {
		opacity: 0.7;
		cursor: pointer;
	}
`;
