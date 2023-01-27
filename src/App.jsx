import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import products from "../products.json";
import ItemDetail from "./components/ItemDetail";
import ItemListContainer from "./components/ItemListContainer";
import List from "./components/list";

import NavBar from "./components/NavBar";

function App() {
	return (
		<Container width="100%" maxWidth="100vw">
			<NavBar />
			<Routes>
				<Route
					path={"/"}
					element={<ItemListContainer products={products} />}
				/>
				<Route
					path="/:idCategoria"
					element={<ItemListContainer products={products} />}
				/>
				<Route path="*" element={<p>404 not found</p>} />
			</Routes>
		</Container>
	);
}

export default App;
