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
	MultipleSelection,
	SelectBox,
	OverSelect,
	CheckBoxes,
	Label,
} from "./SortbarStyle";

import { useNavigate } from "react-router-dom";

const Sortbar = () => {
	const [show, setShow] = useState(false);
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
	const handleColor = (event) => {
		if (url.search.search(`color=${event.target.value}`) >= 0) {
			if (url.search.search(`&color=${event.target.value}`) >= 0) {
				const newURL = url.search.replace(`&color=${event.target.value}`, "");
				navigate(`${newURL}`);
			} else {
				const newURL = url.search.replace(`?color=${event.target.value}`, "");
				navigate(`${newURL}`);
			}
		} else {
			if (url.search) {
				navigate(`${url.search}&color=${event.target.value}`);
			} else {
				navigate(`?color=${event.target.value}`);
			}
		}
		// url.searchParams.append("color", event.target.value);
	};

	const handleSort = (event) => {
		navigate(`?sort=${event.target.value}`);
	};

	return (
		<>
			<Container>
				<Hr />
				<Wrapper>
					<Left>
						<MultipleSelection ref={ref}>
							<SelectBox onClick={() => setShow(!show)}>
								<Select>
									<option>Color</option>
								</Select>
								<OverSelect></OverSelect>
							</SelectBox>

							<CheckBoxes
								style={show ? { display: "block" } : { display: "none" }}
								id="checkBoxes"
							>
								<Label>
									<input type="checkbox" value="black" onChange={handleColor} />
									Black
								</Label>

								<Label>
									<input type="checkbox" value="white" onChange={handleColor} />
									White
								</Label>
								<Label>
									<input type="checkbox" value="red" onChange={handleColor} />
									Red
								</Label>
								<Label>
									<input type="checkbox" value="blue" onChange={handleColor} />
									Blue
								</Label>
							</CheckBoxes>
						</MultipleSelection>

						<Select name="sort" onChange={handleSort}>
							<Option value="">Sort By</Option>
							<Option value="newest">Newest</Option>
							<Option value="lowest">Lowest Price</Option>
							<Option value="highest">Highest Price</Option>
						</Select>
					</Left>
					<Right>
						<Input
							type="text"
							placeholder="&#xF002; Item name or Brand name..."
							onChange={handleChange}
						/>
					</Right>
				</Wrapper>
			</Container>
		</>
	);
};

export default Sortbar;
