import { data } from "../../data/data";
import ProductCard from "../productCard/productCard";

export const ProductContainer = ({ filteredCategory }) => {
  const gridContainerStyle = {
    margin: "20px",
    marginTop: "50px",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };
  const filteredProducts = data.filter((item) => {
    return item.category === filteredCategory || filteredCategory === "All";
  });

  return (
    <div style={gridContainerStyle}>
      <div style={gridContainerStyle}>
        {filteredProducts.map((productData) => (
          <ProductCard
            key={productData.id}
            name={productData.name}
            category={productData.category}
            price={productData.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
