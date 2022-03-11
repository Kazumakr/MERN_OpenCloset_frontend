import React, { useContext, useEffect, useState } from "react";
import {
	FaTrashAlt,
	FaRegEdit,
	FaThumbsUp,
	FaRegThumbsUp,
} from "react-icons/fa";
import {
	Container,
	ImgContainer,
	Img,
	ItemInfo,
	Name,
	Price,
	Size,
	Color,
	Brand,
	Fabric,
	Note,
	CommentContainer,
	Form,
	CommentInput,
	CommentButton,
	Edit,
} from "./SingleItemStyle";
import { Link, useLocation } from "react-router-dom";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";

const SingleItem = () => {
	const [isLiked, setIsLiked] = useState(false);
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [item, setItem] = useState({});
	const [comment, setComment] = useState("");
	const { user } = useContext(Context);

	const publicFolder = "http://localhost:5000/images/";

	useEffect(() => {
		axiosInstance
			.get("/items/" + path)
			.then((res) => {
				setItem(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [path]);

	const handleDelete = async () => {
		await axiosInstance
			.delete(`/items/${item._id}`, { data: { username: user.username } })
			.then((res) => {
				if (item.images) {
					axiosInstance
						.delete(`/images/${item.images}`)
						.then()
						.catch((err) => {
							console.log(err);
						});
				}
				window.location.replace("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleComment = async (event) => {
		event.preventDefault();
		await axiosInstance
			.put(`/items/${item._id}/comments`, {
				comment: comment,
				username: user.username,
				userId: user._id,
			})
			.then((res) => {
				console.log("comment submit");
				setItem(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleLikes = async () => {
		await axiosInstance
			.put(`/items/${item._id}/likes`, { userId: user._id })
			.then((res) => {
				console.log("res", res);
				setIsLiked(true);
				setItem(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const handleUnlikes = async () => {
		await axiosInstance
			.put(`/items/${item._id}/unlikes`, { userId: user._id })
			.then((res) => {
				console.log(res);
				setIsLiked(false);
				setItem(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<Container>
			<ImgContainer>
				<Img
					src={
						item.images
							? "http://localhost:5000/api/image/" + item.images
							: publicFolder + "NoItemImage.jpg"
					}
				/>
			</ImgContainer>
			<ItemInfo>
				{item.username === user?.username && (
					<Edit>
						<Link to={`/edititem/${item._id}`}>
							<FaRegEdit style={{ color: "green", fontSize: "24px" }} />
						</Link>
						<FaTrashAlt
							style={{ color: "red", fontSize: "24px" }}
							onClick={handleDelete}
						/>
					</Edit>
				)}
				<Name>{item.name}</Name>
				<Price>Price : {item.price && `${item.price} USD`}</Price>
				<Color>Color : {item.color}</Color>
				<Size>Size : {item.size}</Size>
				<Brand>Brand : {item.brand}</Brand>
				<Fabric>Fabric : {item.fabric}</Fabric>
				<Note>Note : {item.note}</Note>
				<div>
					{isLiked ? (
						<FaThumbsUp onClick={handleUnlikes} style={{ cursor: "pointer" }} />
					) : (
						<FaRegThumbsUp
							onClick={handleLikes}
							style={{ cursor: "pointer" }}
						/>
					)}
					<span>{item.likes?.length}</span>
				</div>
				<h3>Comments</h3>

				<CommentContainer>
					<Form>
						<CommentInput
							type="text"
							placeholder="Leave a comment here..."
							onChange={(event) => setComment(event.target.value)}
						/>
						<CommentButton onClick={handleComment}>Comment</CommentButton>
					</Form>
				</CommentContainer>
				{item.comments?.map((comment, index) => (
					<CommentContainer key={index}>
						<div>
							<span style={{ fontWeight: "bold" }}>{comment.postedByName}</span>
							<br />
							<span>{comment.comment}</span>
						</div>
					</CommentContainer>
				))}
			</ItemInfo>
		</Container>
	);
};

export default SingleItem;
