import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import {  Route, Routes } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import List from "./list";
import ProductCard from "./ProductCard";

function ItemListContainer({ productos, ropaDeHombre, ropaDeMujer, electronica, joyeria, greeting }) {
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
          textAlign="center"
        >
          {greeting}
        </Heading>
      </Box>
      <ul>
        <Routes>
          <Route path={"/"} element={<p>Bienvenidos a la tienda</p>} />
          
          <Route path="/ropaDeHombre" element={<List list={ropaDeHombre} />} />
          <Route path="/ropaDeHombre/:title" element={<ItemDetail productos={productos} />} />
          <Route path="/ropaDeMujer" element={<List list={ropaDeMujer} />} />
          <Route path="/ropaDeMujer/:title" element={<ItemDetail productos={productos} />} />
          <Route path="/joyeria" element={<List list={joyeria} />} />
          <Route path="/joyeria/:title" element={<ItemDetail productos={productos} />} />
          <Route path="/electronica" element={<List list={electronica} />} />
          <Route path="/electronica/:title" element={<ItemDetail productos={productos} />} />
          <Route path="*" element={<p>404 not found</p>} />
        </Routes>
      </ul>
      <SimpleGrid minChildWidth="250px" spacing="20px" m="6">
        {productos.map((producto) => {
          return (
            <ProductCard
              key={producto.id}
              image={producto.image}
              title={producto.title}
              category={producto.category}
              description={producto.description}
              price={producto.price}
            />
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default ItemListContainer;
