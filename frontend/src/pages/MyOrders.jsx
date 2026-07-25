import { useEffect, useState } from "react";
import API from "../api/axios";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  const getMyOrders = async () => {
    try {
      const response = await API.get("/orders");
      setOrders(response.data.orders);
    } catch (error) {
      console.log(error.response?.data);
      alert("Failed to fetch orders");
    }
  };

  useEffect(() => {
    getMyOrders();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📦 My Orders</h1>

      {orders.length === 0 ? (
        <h2>No orders found.</h2>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h3>Order ID: {order._id}</h3>

            <p>
              <strong>Status:</strong> {order.status}
            </p>

            <p>
              <strong>Payment:</strong> {order.paymentMethod}
            </p>

            <p>
              <strong>Address:</strong> {order.address}
            </p>

            <p>
              <strong>Total:</strong> ₹{order.totalAmount}
            </p>

            <h4>Items:</h4>

            {order.items.map((item) => (
              <div
                key={item.product._id}
                style={{
                  paddingLeft: "15px",
                  marginBottom: "10px",
                }}
              >
                <p>
                  {item.product.name} × {item.quantity}
                </p>

                <p>₹{item.product.price}</p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;