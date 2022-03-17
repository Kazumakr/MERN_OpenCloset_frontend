import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import CategorySection from "../../components/CategorySection/CategorySection";
import Hero from "../../components/Hero/Hero";
import Items from "../../components/Items/Items";
import NoFollowing from "../../components/NoFollowing/NoFollowing";

import { axiosInstance } from "../../config";

import { Context } from "../../context/Context";

import { Wrapper, Title, Subtitle, Hr } from "./HomeStyle";
const Home = () => {
	const [items, setItems] = useState([]);
	const { search } = useLocation();

	const { user } = useContext(Context);

	useEffect(() => {
		let itemsRes = [];
		async function fetchData() {
			for (let i = 0; i < user.following.length; i++) {
				// fetchData(id);
				const response = await axiosInstance.get(
					`/items/followingitems/${user.following[i]}` + search
				);
				itemsRes.push(...response.data);
			}
			setItems(itemsRes);
		}
		fetchData();
	}, [user, search]);

	return (
		<>
			<Hero />
			<CategorySection />
			<Wrapper>
				<Title>Latest Items</Title>
				<Subtitle>Take a look your following user's items</Subtitle>
			</Wrapper>
			{items[0] ? (
				<>
					<Hr />
					<Items items={items} />
				</>
			) : (
				<NoFollowing />
			)}
		</>
	);
};

export default Home;
