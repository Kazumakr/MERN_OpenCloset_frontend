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
	ClearButton,
	MobileSelect,
} from "./SortbarStyle";

import { useNavigate } from "react-router-dom";

const Sortbar = () => {
	const [show, setShow] = useState(false);
	const [checkedOption, setCheckedOption] = useState([]);
	const navigate = useNavigate();

	const ref = useRef();

	const url = new URL(window.location.href);

	const ColorOptions = [
		{ name: "White", value: "white" },
		{ name: "Black", value: "black" },
		{ name: "Gold", value: "gold" },
		{ name: "Silver", value: "silver" },
		{ name: "Blue", value: "blue" },
		{ name: "Green", value: "green" },
		{ name: "Pink", value: "pink" },
		{ name: "Red", value: "red" },
		{ name: "Gray", value: "gray" },
		{ name: "Orange", value: "orange" },
		{ name: "Purple", value: "purple" },
		{ name: "Brown", value: "brown" },
		{ name: "Beige", value: "beige" },
		{ name: "Khaki", value: "khaki" },
	];

	const SubcategoryOptions = [
		{ name: "Outer", value: "outer" },
		{ name: "Tops", value: "tops" },
		{ name: "Bottoms", value: "bottoms" },
		{ name: "Sports", value: "sports" },
		{ name: "Underwear", value: "underwear" },
		{ name: "Bags", value: "bags" },
		{ name: "Jewerly", value: "jewerly" },
		{ name: "Sunglasses", value: "sunglasses" },
		{ name: "Hats", value: "hats" },
		{ name: "Wallets", value: "wallets" },
		{ name: "Belts", value: "belts" },
		{ name: "Sneakers", value: "sneakers" },
		{ name: "Dress", value: "dress" },
		{ name: "Sandals", value: "sandals" },
		{ name: "Boots", value: "boots" },
		{ name: "Heels", value: "heels" },
		{ name: "Loafers", value: "loafers" },
	];
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
		if (checkedOption.some((option) => option === event.target.value)) {
			setCheckedOption(
				checkedOption.filter((option) => option !== event.target.value)
			);
		} else {
			setCheckedOption([...checkedOption, event.target.value]);
		}

		if (url.search.search(`color=${event.target.value}`) >= 0) {
			if (url.search.search(`&color=${event.target.value}`) >= 0) {
				const newURL = url.search.replace(`&color=${event.target.value}`, "");
				navigate(`${newURL}`);
			} else {
				let newURL = url.search.replace(`?color=${event.target.value}`, "");
				newURL = "?" + newURL.substring(1);

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
	const handleClear = () => {
		setCheckedOption([]);
		navigate(`${url.pathname}`);
	};

	const handleSort = (event) => {
		navigate(`?sort=${event.target.value}`);
	};

	const handleCategory = (event) => {
		navigate(`?category=${event.target.value}`);
	};
	const handleSubcategory = (event) => {
		navigate(`?subcategory=${event.target.value}`);
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
								style={show ? { display: "flex" } : { display: "none" }}
								id="checkBoxes"
							>
								{ColorOptions.map((color, index) => (
									<Label key={index}>
										<input
											type="checkbox"
											value={color.value}
											onChange={handleColor}
											checked={checkedOption.some(
												(option) => option === color.value
											)}
										/>
										{color.name}
									</Label>
								))}

								<ClearButton onClick={handleClear}>Clear</ClearButton>
							</CheckBoxes>
						</MultipleSelection>

						<Select name="sort" onChange={handleSort}>
							<Option value="">Sort By</Option>
							<Option value="newest">Newest</Option>
							<Option value="lowest">Lowest Price</Option>
							<Option value="highest">Highest Price</Option>
						</Select>

						<MobileSelect name="category" onChange={handleCategory}>
							<Option value="">Category</Option>
							<Option value="clothing">Clothing</Option>
							<Option value="accessories">Accessories</Option>
							<Option value="shoes">Shoes</Option>
						</MobileSelect>
						<MobileSelect name="subcategory">
							<Option value="">Subcategory</Option>
							{SubcategoryOptions.map((subcategory, index) => (
								<Option
									key={index}
									value={subcategory.value}
									onChange={handleSubcategory}
								>
									{subcategory.name}
								</Option>
							))}
						</MobileSelect>
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

export default Sortbar;
