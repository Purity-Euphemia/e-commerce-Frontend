import api from "../api/axios";

export default function Checkout() {
  const checkout = async () => {
    const res = await api.post("/checkout");
    alert(`Order placed. ID: ${res.data.order_id}`);
  };

  return <button onClick={checkout}>Checkout</button>;
}
