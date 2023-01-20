import ProductCard from "./ProductCard";

const List = function ({ list }) {
  return list.map(({ title, description, price, image }) => (
    <ProductCard key={title} title={title} description={description} price={price} image={image} />
  ));
};

export default List;