import ProductCard from "./ProductCard";

const List = ({ list }) => {
	return list.map(({ id, image, title, description, price, category }) => (
		<ProductCard
			key={id}
			title={title}
			description={description}
			price={price}
			image={image}
			category={category}
		/>
	));
};

export default List;
