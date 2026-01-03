import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/admin/orders").then(res => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {orders.map(o => (
        <div key={o.id}>
          Order #{o.id} – {o.status}
        </div>
      ))}
    </div>
  );
}
