import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import "../styles/Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Get Cart
  const getCart = async () => {
    try {
      const response = await API.get("/cart");
      setCart(response.data.cart.items);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  // Update Quantity
  const updateQuantity = async (productId, quantity) => {
    try {
      if (quantity < 1) return;

      const response = await API.put("/cart", {
        productId,
        quantity,
      });

      alert(response.data.message);
      getCart();
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  // Remove Item
  const removeItem = async (productId) => {
    try {
      const response = await API.delete("/cart", {
        data: { productId },
      });

      alert(response.data.message);
      getCart();
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  // Total Price
  const totalPrice = cart.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="cart-page">

      <h1 className="cart-title">
        🛒 My Shopping Cart
      </h1>

      {cart.length === 0 ? (

        <div className="empty-cart">
          <h2>Your cart is empty 😔</h2>
          <p>Add some delicious products to continue shopping.</p>
        </div>

      ) : (

        <>
          <div className="cart-grid">

            <div className="cart-items">

              {cart.map((item) => (

                <div
                  className="cart-card"
                  key={item.product._id}
                >

                  <img
                    src={
                      item.product.image ||
                      "https://via.placeholder.com/150"
                    }
                    alt={item.product.name}
                  />

                  <div className="cart-info">

                    <h2>{item.product.name}</h2>

                    <p>{item.product.description}</p>

                    <h3>₹{item.product.price}</h3>

                    <div className="qty-box">

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product._id,
                            item.quantity - 1
                          )
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product._id,
                            item.quantity + 1
                          )
                        }
                      >
                        +
                      </button>

                    </div>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeItem(item.product._id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

            <div className="summary-card">

              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Total Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <span>FREE</span>
              </div>

              <div className="summary-row total">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>

              <button
                className="checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>

            </div>

          </div>

          <footer className="cart-footer">
            © 2026 Zippy • Developed by
            <span> Mirza Junaid</span>
          </footer>

        </>
      )}

    </div>
  );
}

export default Cart;