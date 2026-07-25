import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import API from "../api/axios";
import "../styles/Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!address.trim()) {
      alert("Please enter your delivery address");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/orders", {
        address,
        paymentMethod,
      });

      alert(response.data.message);

      setAddress("");

      navigate("/order-success");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Failed to place order"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="checkout-container">

      <div className="checkout-card">

        <h1>🛍 Checkout</h1>

        <p>
          Confirm your delivery details before placing the order.
        </p>

        <form onSubmit={handlePlaceOrder}>

          <div className="input-group">

            <label>
              <FaMapMarkerAlt />
              Delivery Address
            </label>

            <textarea
              rows="5"
              placeholder="House No, Street, Landmark, City..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />

          </div>

          <div className="input-group">

            <label>
              <FaMoneyBillWave />
              Payment Method
            </label>

           <div className="payment-options">

  <label className={paymentMethod==="Cash on Delivery" ? "payment-card active" : "payment-card"}>

    <input
      type="radio"
      value="Cash on Delivery"
      checked={paymentMethod==="Cash on Delivery"}
      onChange={(e)=>setPaymentMethod(e.target.value)}
    />

    💵 Cash on Delivery

  </label>

  <label className={paymentMethod==="PhonePe" ? "payment-card active" : "payment-card"}>

    <input
      type="radio"
      value="PhonePe"
      checked={paymentMethod==="PhonePe"}
      onChange={(e)=>setPaymentMethod(e.target.value)}
    />

    📱 PhonePe

  </label>

  <label className={paymentMethod==="Google Pay" ? "payment-card active" : "payment-card"}>

    <input
      type="radio"
      value="Google Pay"
      checked={paymentMethod==="Google Pay"}
      onChange={(e)=>setPaymentMethod(e.target.value)}
    />

    🟣 Google Pay

  </label>

  <label className={paymentMethod==="Paytm" ? "payment-card active" : "payment-card"}>

    <input
      type="radio"
      value="Paytm"
      checked={paymentMethod==="Paytm"}
      onChange={(e)=>setPaymentMethod(e.target.value)}
    />

    🔵 Paytm

  </label>

  <label className={paymentMethod==="Card" ? "payment-card active" : "payment-card"}>

    <input
      type="radio"
      value="Card"
      checked={paymentMethod==="Card"}
      onChange={(e)=>setPaymentMethod(e.target.value)}
    />

    💳 Credit / Debit Card

  </label>

</div>

          </div>

          <div className="summary-box">

            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Delivery Charge</span>
              <span>FREE</span>
            </div>

            <div className="summary-row">
              <span>Payment</span>
              <span>{paymentMethod}</span>
            </div>

          </div>

          <button
            className="place-order-btn"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Placing Order..."
              : "Place Order"}
          </button>

        </form>

      </div>

      <footer className="checkout-footer">
        © 2026 Zippy • Developed by
        <span> Mirza Junaid</span>
      </footer>

    </div>
  );
}

export default Checkout;