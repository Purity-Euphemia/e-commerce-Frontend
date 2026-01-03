import api from "../api/axios";

export default function ProductCard({ product }) {
  const addToCart = async () => {
    await api.post("/cart/add", {
      product_id: product.id,
      quantity: 1,
    });
    alert("Added to cart");
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>₦{product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
