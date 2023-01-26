import { useLocation, useParams } from "react-router-dom";

const ItemDetail = ({ products }) => {
  const { title } = useParams();
  const location = useLocation().pathname.split("/")[1];
  const items = products[category]; 
  const item = items.find((item) => item.title === title);
  return (
    <>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>{item.image}</p>
      <p>{item.price}</p>
    </>
  );
};

export default ItemDetail;