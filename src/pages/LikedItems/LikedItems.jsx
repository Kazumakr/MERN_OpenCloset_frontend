import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import Items from "../../components/Items/Items";
import Sortbar from "../../components/Sortbar/Sortbar";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";

import { Container, Title } from "./LikedItemsStyle";
const LikedItems = () => {
	const [items, setItems] = useState([]);
	const { search } = useLocation();
	const { user } = useContext(Context);

	const location = useLocation();
	const path = location.pathname.split("/")[2];
	useEffect(() => {
		axiosInstance
			.get(`/items/likeditems/` + user?._id + search)
			.then((res) => {
				setItems(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [path, search]);
	return (
		<Container>
			<Title>Liked Items</Title>
			<Sortbar />
			<Items items={items} />
		</Container>
	);
};

export default LikedItems;
