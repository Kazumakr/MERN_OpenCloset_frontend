import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import Items from "../../components/Items/Items";
import Sortbar from "../../components/Sortbar/Sortbar";
import SubMenu from "../../components/SubMenu/SubMenu";
import Usercard from "../../components/Usercard/Usercard";

import { axiosInstance } from "../../config";

import { Context } from "../../context/Context";
const Home = () => {
	const [items, setItems] = useState([]);
	const { search } = useLocation();

	// const { user } = useContext(Context);

	useEffect(() => {
		axiosInstance
			.get("/items" + search)
			.then((res) => {
				setItems(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [search]);

	return (
		<>
			{/* <Usercard  /> */}
			<SubMenu />
			<Sortbar />
			<Items items={items} />
		</>
	);
};

export default Home;
