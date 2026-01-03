import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get("/cart").then(res => setItems(res.data));
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      {items.map(i => (
        <div key={i.id}>
          {i.product.name} x {i.quantity}
        </div>
      ))}
    </div>
  );
}
