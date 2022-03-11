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
							<Label>Item Name</Label>
							<Input
								type="text"
								name="name"
								value={name}
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
							<Input type="text" name="category" />
						</FormGroup>
						<FormGroup>
							<Label>Sub Category</Label>

							<Input type="text" name="subcategory" />
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
