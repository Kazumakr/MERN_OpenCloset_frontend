import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import Items from "../../components/Items/Items";
import Sortbar from "../../components/Sortbar/Sortbar";
import Usercard from "../../components/Usercard/Usercard";

import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";

import { Container } from "./ItemListStyle";

const ItemList = () => {
	const [items, setItems] = useState([]);
	// const { user } = useContext(Context);
	const { search } = useLocation();

	const location = useLocation();
	const path = location.pathname.split("/")[1];
	const [pageuser, setPageUser] = useState({});

	useEffect(() => {
		axiosInstance
			.get("/items/filteritem/" + path + search)
			.then((res) => {
				setItems(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [path, search]);

	useEffect(() => {
		axiosInstance
			.get("/users/" + path)
			.then((res) => {
				setPageUser(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [path]);

	return (
		<Container>
			<Usercard pageuser={pageuser} />
			<Sortbar />

			{/* PrivateMode */}
			{/* {true &&
				(pageuser._id === user._id ||
					pageuser.followers?.some(
						(follower) => follower._id === user?._id
					)) && <Items items={items} />} */}
			<Items items={items} />
		</Container>
	);
};

export default ItemList;
