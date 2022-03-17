import React, { useRef, useState, useEffect } from "react";

import {
	Container,
	Left,
	Right,
	Input,
	Hr,
	Wrapper,
	Select,
	Option,
	HeightSelection,
	SelectBox,
	OverSelect,
	HeightBoxes,
	Button,
	HeightInput,
	InputContainer,
	ButtonContainer,
} from "./UserSortbarStyle";

import { useNavigate } from "react-router-dom";

const UserSortbar = () => {
	const [show, setShow] = useState(false);
	const [minheight, setMinheight] = useState("");
	const [maxheight, setMaxheight] = useState("");
	const navigate = useNavigate();

	const ref = useRef();
	const url = new URL(window.location.href);

	useEffect(() => {
		const ClickedOutside = (e) => {
			if (show && ref.current && !ref.current.contains(e.target)) {
				setShow(false);
			}
		};
		document.addEventListener("mousedown", ClickedOutside);
		return () => {
			document.removeEventListener("mousedown", ClickedOutside);
		};
	}, [show]);

	const handleChange = (event) => {
		navigate(`?search=${event.target.value}`);
	};
	const handleHeight = () => {
		if (minheight && maxheight) {
			navigate(`?minheight=${minheight}&maxheight=${maxheight}`);
		} else if (minheight) {
			navigate(`?minheight=${minheight}`);
		} else if (maxheight) {
			navigate(`?maxheight=${maxheight}`);
		}

		// url.searchParams.append("color", event.target.value);
	};
	const handleClear = () => {
		setMinheight("");
		setMaxheight("");
		navigate(`${url.pathname}`);
	};

	const handleGender = (event) => {
		navigate(`?gender=${event.target.value}`);
	};

	return (
		<>
			<Container>
				<Hr />
				<Wrapper>
					<Left>
						<HeightSelection ref={ref}>
							<SelectBox onClick={() => setShow(!show)}>
								<Select>
									<option>Height</option>
								</Select>
								<OverSelect></OverSelect>
							</SelectBox>

							<HeightBoxes
								style={show ? { display: "flex" } : { display: "none" }}
							>
								<InputContainer>
									<HeightInput
										type="number"
										placeholder="min"
										value={minheight}
										onChange={(event) => {
											setMinheight(event.target.value);
										}}
									/>
									cm -
									<HeightInput
										type="number"
										placeholder="max"
										value={maxheight}
										onChange={(event) => setMaxheight(event.target.value)}
									/>
									cm
								</InputContainer>
								<ButtonContainer>
									<Button onClick={handleHeight}>Apply</Button>
									<Button onClick={handleClear}>Clear</Button>
								</ButtonContainer>
							</HeightBoxes>
						</HeightSelection>

						<Select name="gender" onChange={handleGender}>
							<Option value="">Gender</Option>
							<Option value="Male">Male</Option>
							<Option value="Female">Female</Option>
						</Select>
					</Left>
					<Right>
						<Input
							type="text"
							placeholder="&#xF002; Item name, Brand"
							onChange={handleChange}
						/>
					</Right>
				</Wrapper>
			</Container>
		</>
	);
};

export default UserSortbar;
