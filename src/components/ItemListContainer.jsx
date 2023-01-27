import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import List from "./list";

import ProductCard from "./ProductCard";

function ItemListContainer({ products, greeting }) {
	const { idCategoria } = useParams();
	const [myProductos, setMyProductos] = useState([]);

	useEffect(() => {
		idCategoria === undefined
			? setMyProductos([
					...products.ropaDeHombre,
					...products.ropaDeMujer,
					...products.joyeria,
					...products.electronica,
			  ])
			: setMyProductos(products[idCategoria]);
	}, [idCategoria]);

	return (
		<>
			<Box textAlign="center">
				<Heading
					as="h1"
					color="blue.400"
					fontSize="2xl"
					fontWeight="bold"
					lineHeight="tall"
					letterSpacing="wide"
					textAlign="center">
					{greeting}
				</Heading>
			</Box>

			<SimpleGrid minChildWidth="250px" spacing="20px" m="6">
				<List list={myProductos} />
			</SimpleGrid>
		</>
	);
}

export default ItemListContainer;
