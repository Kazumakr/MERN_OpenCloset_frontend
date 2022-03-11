import React, { useState } from "react";

import Select from "react-select";
import {
	Container,
	Left,
	Right,
	Input,
	Span,
	Hr,
	Wrapper,
	FilterMenu,
} from "./SortbarStyle";

import { useLocation, useNavigate } from "react-router-dom";

const ColorOptions = [
	{ value: "newest", label: "Newest" },
	{ value: "lowest", label: "Lowest Price" },
	{ value: "highest", label: "Highest Price" },
];

const customStyles = {
	container: (provided) => ({
		...provided,
		width: 150,
	}),
};

const Sortbar = () => {
	const [isClicked, setIsClicked] = useState(false);
	const navigate = useNavigate();

	const url = new URL(window.location.href);

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

	return (
		<>
			<Container>
				<Hr />
				<Wrapper>
					<Left>
						<Span onClick={() => setIsClicked(!isClicked)}>Filter</Span>
						{isClicked ? (
							<FilterMenu>
								<div onClick={() => setIsClicked(false)}>close</div>
								<div>
									<label>Color</label>
									<div>
										<input
											type="checkbox"
											value="black"
											onChange={handleColor}
										/>
										<span>Black</span>
										<input
											type="checkbox"
											value="white"
											onChange={handleColor}
										/>
										<span>White</span>
										<input type="checkbox" />
										<span>Black</span>
									</div>
								</div>
								<div>
									<label>Size</label>
									<div>
										<input type="checkbox" />
										<span>Black</span>
										<input type="checkbox" />
										<span>Black</span>
										<input type="checkbox" />
										<span>Black</span>
									</div>
								</div>
								<div>
									<label>Fabric</label>
									<div>
										<input type="checkbox" />
										<span>Black</span>
										<input type="checkbox" />
										<span>Black</span>
										<input type="checkbox" />
										<span>Black</span>
									</div>
								</div>
							</FilterMenu>
						) : null}
						<Select
							defaultValue=""
							name="sort"
							options={ColorOptions}
							// className="basic"
							// classNamePrefix="select"
							placeholder="Sort By"
							styles={customStyles}
						/>
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
