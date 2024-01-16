import { data } from "../../data/data";
import ProductCard from "../productCard/productCard";

export const ProductContainer = () => {
    const gridContainerStyle = {
        margin: '20px',
        marginTop: '50px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // 4 items per row
        gap: '16px', // Adjust the gap between items
      };

  return (
    <div style={gridContainerStyle}>
      {data.map((productData) => (
        <ProductCard
          name={productData.name}
          category={productData.catgeory}
          price={productData.price}
        />
      ))}
    </div>
  );
};

export default ProductContainer;
