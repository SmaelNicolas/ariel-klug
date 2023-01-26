import {
  Container,
} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import products from "../products.json";
import ItemListContainer from "./components/ItemListContainer";
import List from "./components/list";

import NavBar from "./components/NavBar";


function App() {

  
<Routes>
  <Route path={"/"} element={<p>Bienvenidos a la tienda</p>} />

  <Route path="/ropaDeHombre" element={<List list={ropaDeHombre} />} />
  <Route
    path="/ropaDeHombre/:title"
    element={<ItemDetail products={products} />}
  />
  <Route path="/ropaDeMujer" element={<List list={ropaDeMujer} />} />
  <Route
    path="/ropaDeMujer/:title"
    element={<ItemDetail products={products} />}
  />
  <Route path="/joyeria" element={<List list={joyeria} />} />
  <Route
    path="/joyeria/:title"
    element={<ItemDetail products={products} />}
  />
  <Route path="/electronica" element={<List list={electronica} />} />
  <Route
    path="/electronica/:title"
    element={<ItemDetail products={products} />}
  />
  <Route path="*" element={<p>404 not found</p>} />
</Routes>



  return (
    <Container width="100%" maxWidth="100vw">
      <NavBar/>
      <ItemListContainer productos={products} greeting="Bienvenido a nuestra tienda!" />
          </Container>
  );
}

export default App;
