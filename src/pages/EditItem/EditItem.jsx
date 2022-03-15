import React, { useContext, useEffect, useState } from "react";
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
} from "./EditItemStyle";

import { BsPlusCircle } from "react-icons/bs";

import { axiosInstance } from "../../config";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";

const EditItem = () => {
	const [name, setName] = useState("");
	const [fabric, setFabric] = useState("");
	const [price, setPrice] = useState(null);
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");
	const [brand, setBrand] = useState("");
	const [note, setNote] = useState("");
	const [images, setImages] = useState("");
	const [category, setCategory] = useState("");
	const [subcategory, setSubcategory] = useState("");

	const [file, setFile] = useState(null);

	const location = useLocation();
	const path = location.pathname.split("/")[2];

	const { user } = useContext(Context);

	const publicFolder = "http://localhost:5000/images/";

	useEffect(() => {
		axiosInstance
			.get("/items/" + path)
			.then((res) => {
				setName(res.data.name);
				setPrice(res.data.price);
				setColor(res.data.color);
				setSize(res.data.size);
				setBrand(res.data.brand);
				setNote(res.data.note);
				setImages(res.data.images);
				setCategory(res.data.category);
				setSubcategory(res.data.subcategory);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [path]);

	const handleUpdate = async (event) => {
		event.preventDefault();
		const updatedItem = {
			username: user.username,
			name,
			fabric,
			price,
			color,
			size,
			brand,
			note,
			category,
			subcategory,
		};

		if (file) {
			const data = new FormData();
			const filename = file.name;
			data.append("name", filename);
			data.append("file", file);
			updatedItem.images = filename;
			await axiosInstance
				.post("/upload", data)
				.then()
				.catch((err) => {
					console.log(err);
				});
		}
		await axiosInstance
			.put(`/items/${path}`, updatedItem)
			.then((res) => {})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<Container>
			<Wrapper>
				<TitleContainer>
					<UpdateTitle>Edit Item</UpdateTitle>
				</TitleContainer>
				<Form onSubmit={handleUpdate}>
					<FormGroup>
						<Label>Image</Label>
						{/* {file && <Img src={URL.createObjectURL(file)} alt="" />} */}
						{file ? (
							<Img src={URL.createObjectURL(file)} />
						) : (
							<Img
								src={
									images
										? "http://localhost:5000/api/image/" + images
										: publicFolder + "NoItemImage.jpg"
								}
								alt="ItemImages"
							/>
						)}
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
								value={name}
								required
								onChange={(event) => setName(event.target.value)}
							/>
						</FormGroup>
						<FormGroup>
							<Label>Fabric</Label>
							<Input
								type="text"
								name="fabric"
								value={fabric}
								onChange={(event) => setFabric(event.target.value)}
							/>
						</FormGroup>
					</Section>

					<Section>
						<FormGroup>
							<Label>Color</Label>
							<Input
								type="text"
								name="color"
								value={color}
								onChange={(event) => setColor(event.target.value)}
							/>
						</FormGroup>
						<FormGroup>
							<Label>Size</Label>
							<Input
								type="text"
								name="size"
								value={size}
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
								value={brand}
								onChange={(event) => setBrand(event.target.value)}
							/>
						</FormGroup>
						<FormGroup>
							<Label>Price</Label>
							<div>
								<Input
									type="number"
									name="price"
									value={price}
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
								name="category"
								id=""
								onChange={(event) => setCategory(event.target.value)}
							>
								<Option value="" hidden>
									Selecte a category
								</Option>
								<Option value="clothing" selected={category === "clothing"}>
									Clothing
								</Option>
								<Option
									value="accessories"
									selected={category === "accessories"}
								>
									Accessories
								</Option>
								<Option value="shoes" selected={category === "shoes"}>
									Shoes
								</Option>
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
									name="subcategory"
									id=""
									onChange={(event) => setSubcategory(event.target.value)}
								>
									<Option value="" hidden>
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
									name="subcategory"
									id=""
									onChange={(event) => setSubcategory(event.target.value)}
								>
									<Option value="" hidden>
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
									name="subcategory"
									id=""
									onChange={(event) => setSubcategory(event.target.value)}
								>
									<Option value="" selected hidden>
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
						value={note}
						onChange={(event) => setNote(event.target.value)}
					/>
					<ButtonContainer>
						<UpdateButton type="submit">Update</UpdateButton>
					</ButtonContainer>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default EditItem;
