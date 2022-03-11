import React, { useContext, useEffect, useState } from "react";
import {
	Container,
	Wrapper,
	TitleContainer,
	UpdateTitle,
	Form,
	Label,
	ProfileContainer,
	Img,
	SettingInput,
	Input,
	UpdateButton,
	ButtonContainer,
	Textarea,
	Option,
	FormGroupCheck,
} from "./SettingStyle";

import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";

const Setting = () => {
	const [file, setFile] = useState(null);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [gender, setGender] = useState("");
	const [height, setHeight] = useState("");
	const [bio, setBio] = useState("");
	const [success, setSuccess] = useState(false);

	const { user, dispatch } = useContext(Context);

	const publicFolder = "http://localhost:5000/images/";

	useEffect(() => {
		setUsername(user.username);
		setEmail(user.email);
		setPassword(user.password);
		setGender(user.gender);
		setHeight(user.height);
		setBio(user.bio);
	}, [user]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch({ type: "UPDATE_START" });
		const updatedUser = {
			userId: user._id,
			username,
			email,
			password,
			gender,
			height,
			bio,
		};
		if (file) {
			const data = new FormData();
			const filename = file.name;
			data.append("name", filename);
			data.append("file", file);
			updatedUser.photo = filename;
			await axiosInstance
				.post("/upload", data)
				.then()
				.catch((err) => {
					console.log(err);
				});
		}
		await axiosInstance
			.put("/users/" + user._id, updatedUser)
			.then((res) => {
				console.log("success");
				setSuccess(true);
				dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: "UPDATE_FAILURE" });
			});
	};

	return (
		<Container>
			<Wrapper>
				<TitleContainer>
					<UpdateTitle>Account Settings</UpdateTitle>
					{success && (
						<span style={{ textAlign: "center", color: "green" }}>
							Profile has been updated
						</span>
					)}
				</TitleContainer>
				<Form onSubmit={handleSubmit}>
					<ProfileContainer>
						{file ? (
							<Img src={URL.createObjectURL(file)} />
						) : (
							<Img
								src={
									user.photo
										? "http://localhost:5000/api/image/" + user.photo
										: publicFolder + "NoImage.png"
								}
								alt="profilePicture"
							/>
						)}

						<Label htmlFor="fileInput">
							<BsPlusCircle
								style={{
									fontSize: "24px",
									opacity: "0.6",
									marginLeft: "5px",
									marginBottom: "10px",
								}}
							/>
						</Label>
						<SettingInput
							id="fileInput"
							type="file"
							onChange={(event) => setFile(event.target.files[0])}
						/>
					</ProfileContainer>
					<Label>Username</Label>
					<Input
						type="text"
						name="name"
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
					<Label>Email</Label>
					<Input
						type="email"
						name="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<Label>Gender</Label>
					<FormGroupCheck>
						<Input
							type="radio"
							value="Male"
							checked={gender === "Male"}
							onChange={(event) => setGender(event.target.value)}
						/>
						<span style={{ margin: "0 5px" }}>Male</span>
						<Input
							type="radio"
							value="Female"
							checked={gender === "Female"}
							onChange={(event) => setGender(event.target.value)}
						/>
						<span style={{ marginLeft: "5px" }}>Female</span>
					</FormGroupCheck>
					<Label>Height</Label>
					<div>
						<Input
							type="number"
							name="height"
							value={height}
							onChange={(event) => setHeight(event.target.value)}
						/>
						cm
					</div>
					<Label>Bio</Label>
					<Textarea
						type="text"
						name="bio"
						value={bio}
						onChange={(event) => setBio(event.target.value)}
					/>
					<ButtonContainer>
						<UpdateButton type="submit">Update</UpdateButton>
					</ButtonContainer>
					<Option>
						<Link to={"/changepassword"}>Change Password</Link>
						<Link to={"/deleteaccount"}>Delete Account</Link>
					</Option>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Setting;
