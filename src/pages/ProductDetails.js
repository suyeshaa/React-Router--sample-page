import { useParams } from "react-router";

const ProductDetails = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetails;
