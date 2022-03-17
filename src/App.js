import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AddItem from "./pages/AddItem/AddItem";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import DeleteAccount from "./pages/DeleteAccount/DeleteAccount";
import EditItem from "./pages/EditItem/EditItem";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Setting from "./pages/Setting/Setting";
import Signup from "./pages/SignUp/Signup";
import SingleItemPage from "./pages/SingleItem/SingleItemPage";
import UserLists from "./pages/UserLists/UserLists";

import { Context } from "./context/Context";
import ItemList from "./pages/ItemList/ItemList";
import LikedItems from "./pages/LikedItems/LikedItems";

function App() {
	const { user } = useContext(Context);

	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route exact path="/" element={user ? <Home /> : <Login />} />
				<Route exact path="/:id" element={user ? <ItemList /> : <Login />} />
				<Route
					path="/items/:id"
					element={user ? <SingleItemPage /> : <Login />}
				/>
				<Route path="/users" element={<UserLists />} />
				<Route path="/login" element={user ? <Home /> : <Login />} />
				<Route path="/signup" element={user ? <Home /> : <Signup />} />
				<Route
					path="/changepassword"
					element={user ? <ChangePassword /> : <Login />}
				/>
				<Route
					path="/deleteaccount"
					element={user ? <DeleteAccount /> : <Login />}
				/>
				<Route path="/setting" element={user ? <Setting /> : <Login />} />
				<Route path="/additem" element={user ? <AddItem /> : <Login />} />
				<Route path="/edititem/:id" element={user ? <EditItem /> : <Login />} />
				<Route path="/likeditems" element={user ? <LikedItems /> : <Login />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
