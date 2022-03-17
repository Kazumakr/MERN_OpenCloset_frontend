import React, { useContext, useState } from "react";
import {
	Container,
	Wrapper,
	TitleContainer,
	UpdateTitle,
	Form,
	Label,
	Img,
	Input,
	UpdateButton,
	ButtonContainer,
	Textarea,
	Section,
	FormGroup,
	Select,
	Option,
} from "./AddItemStyle";

import { BsPlusCircle } from "react-icons/bs";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";
const AddItem = () => {
	const [name, setName] = useState("");
	const [fabric, setFabric] = useState("");
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");
	const [brand, setBrand] = useState("");
	const [price, setPrice] = useState("");
	const [note, setNote] = useState("");
	const [category, setCategory] = useState("");
	const [subcategory, setSubcategory] = useState("");

	const [file, setFile] = useState(null);

	const { user } = useContext(Context);

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

	const handleSubmit = async (event) => {
		event.preventDefault();
		const newItem = {
			username: user.username,
			user: user._id,
			name,
			fabric,
			color,
			size,
			brand,
			price,
			note,
			category,
			subcategory,
		};
		if (file) {
			const data = new FormData();
			const filename = file.name;
			data.append("name", filename);
			data.append("file", file);
			newItem.images = filename;
			await axiosInstance
				.post("/upload", data)
				.then()
				.catch((err) => {
					console.log(err);
				});
		}
		await axiosInstance
			.post("/items", newItem)
			.then((res) => {
				window.location.replace("/items/" + res.data._id);
			})
			.cata((err) => {
				console.log(err);
			});
	};
	return (
		<Container>
			<Wrapper>
				<TitleContainer>
					<UpdateTitle>Add A New Item</UpdateTitle>
				</TitleContainer>
				<Form onSubmit={handleSubmit}>
					<FormGroup>
						<Label>Image</Label>
						{file && <Img src={URL.createObjectURL(file)} alt="" />}
						<Label htmlFor="fileInput">
							<BsPlusCircle style={{ fontSize: "34px", cursor: "pointer" }} />
						</Label>
						<Input
							id="fileInput"
							type="file"
							style={{ display: "none" }}
							onChange={(event) => setFile(event.target.files[0])}
						/>
					</FormGroup>
					<Section>
						<FormGroup>
							<Label>Item Name*</Label>
							<Input
								type="text"
								name="name"
								required
								onChange={(event) => setName(event.target.value)}
							/>
						</FormGroup>
						<FormGroup>
							<Label>Fabric</Label>
							<Input
								type="text"
								name="fabric"
								onChange={(event) => setFabric(event.target.value)}
							/>
						</FormGroup>
					</Section>

					<Section>
						<FormGroup>
							<Label>Color</Label>
							<Select
								defaultValue={"DEFAULT"}
								name="color"
								onChange={(event) => setColor(event.target.value)}
							>
								<Option value="DEFAULT" hidden>
									Selecte a color
								</Option>
								{ColorOptions.map((coloroption, index) => (
									<Option key={index} value={coloroption.value}>
										{coloroption.name}
									</Option>
								))}
							</Select>
						</FormGroup>
						<FormGroup>
							<Label>Size</Label>
							<Input
								type="text"
								name="size"
								onChange={(event) => setSize(event.target.value)}
							/>
						</FormGroup>
					</Section>
					<Section>
						<FormGroup>
							<Label>Brand</Label>

							<Input
								type="text"
								name="brand"
								onChange={(event) => setBrand(event.target.value)}
							/>
						</FormGroup>
						<FormGroup>
							<Label>Price</Label>
							<div>
								<Input
									type="number"
									name="price"
									onChange={(event) => setPrice(event.target.value)}
								/>
								USD
							</div>
						</FormGroup>
					</Section>
					<Section>
						<FormGroup>
							<Label>Category</Label>
							<Select
								defaultValue={"DEFAULT"}
								name="category"
								id=""
								onChange={(event) => setCategory(event.target.value)}
							>
								<Option value="DEFAULT" hidden>
									Selecte a category
								</Option>
								<Option value="clothing">Clothing</Option>
								<Option value="accessories">Accessories</Option>
								<Option value="shoes">Shoes</Option>
							</Select>
						</FormGroup>
						<FormGroup>
							<Label>Sub Category</Label>
							{category === "" && (
								<Select>
									<Option value="" disabled hidden>
										Select a subcategory
									</Option>
								</Select>
							)}
							{category === "clothing" && (
								<Select
									defaultValue={"DEFAULT"}
									name="subcategory"
									id=""
									onChange={(event) => setSubcategory(event.target.value)}
								>
									<Option value="DEFAULT" hidden>
										Select a subcategory
									</Option>
									<Option value="outer">Outer</Option>
									<Option value="tops">Tops</Option>
									<Option value="bottoms">Bottoms</Option>
									<Option value="sports">Sports</Option>
									<Option value="underwear">Underwear</Option>
								</Select>
							)}
							{category === "accessories" && (
								<Select
									defaultValue={"DEFAULT"}
									name="subcategory"
									id=""
									onChange={(event) => setSubcategory(event.target.value)}
								>
									<Option value="DEFAULT" hidden>
										Select a subcategory
									</Option>
									<Option value="bags">Bags</Option>
									<Option value="jewelry">Jewelry</Option>
									<Option value="sunglasses">Sunglasses</Option>
									<Option value="hats">Hats</Option>
									<Option value="wallets">Wallets</Option>
									<Option value="belts">Belts</Option>
								</Select>
							)}
							{category === "shoes" && (
								<Select
									defaultValue={"DEFAULT"}
									name="subcategory"
									id=""
									onChange={(event) => setSubcategory(event.target.value)}
								>
									<Option value="DEFAULT" hidden>
										Select a subcategory
									</Option>
									<Option value="sneakers">Sneakers</Option>
									<Option value="dress">Dress</Option>
									<Option value="sandals">Sandals</Option>
									<Option value="boots">Boots</Option>
									<Option value="heels">Heels</Option>
									<Option value="loafers">Loafers</Option>
								</Select>
							)}
						</FormGroup>
					</Section>
					<Label>Note</Label>
					<Textarea
						type="text"
						name="note"
						onChange={(event) => setNote(event.target.value)}
					/>
					<ButtonContainer>
						<UpdateButton type="submit">Add</UpdateButton>
					</ButtonContainer>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default AddItem;
