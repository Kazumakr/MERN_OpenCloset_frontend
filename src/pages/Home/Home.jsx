import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import CategorySection from "../../components/CategorySection/CategorySection";
import Hero from "../../components/Hero/Hero";
import Items from "../../components/Items/Items";

import { axiosInstance } from "../../config";

import { Context } from "../../context/Context";

import { Wrapper, Title, Subtitle, Hr } from "./HomeStyle";
const Home = () => {
	const [items, setItems] = useState([]);
	const { search } = useLocation();

	const { user } = useContext(Context);
	let itemsRes = [];

	useEffect(async () => {
		// const itemsRes = [];
		// console.log("/////////");
		// user.following?.map(async (userId, index) => {
		// 	await axiosInstance
		// 		.get(`/items/following/${userId}`)
		// 		.then((res) => {
		// 			itemsRes.push(...res.data);
		// 			console.log("res.data : ", res.data);
		// 			console.log("itemsRes : ", itemsRes);
		// 			setItems(itemsRes);
		// 			console.log("items : ", items);
		// 			console.log(index);
		// 		})
		// 		.catch((err) => {
		// 			console.log(err);
		// 		});
		// });

		for (let id of user.following) {
			const response = await axiosInstance.get(
				`/items/followingitems/${id}` + search
			);
			itemsRes.push(...response.data);
		}
		console.log(itemsRes);
		setItems(itemsRes);
	}, []);

	return (
		<>
			<Hero />
			<CategorySection />
			<Wrapper>
				<Title>Latest Items</Title>
				<Subtitle>Take a look your following user's items</Subtitle>
			</Wrapper>
			<Hr />
			<Items items={items} />
		</>
	);
};

export default Home;
