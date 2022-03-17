import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Items from "../../components/Items/Items";
import Sortbar from "../../components/Sortbar/Sortbar";
import Usercard from "../../components/Usercard/Usercard";

import { axiosInstance } from "../../config";

import { Container } from "./ItemListStyle";

const ItemList = () => {
	const [items, setItems] = useState([]);

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

			<Items items={items} />
		</Container>
	);
};

export default ItemList;
