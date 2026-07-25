import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaMotorcycle,
  FaBoxOpen,
} from "react-icons/fa";
import "../styles/OrderSuccess.css";

function OrderSuccess() {

  const stages = [
    "Order Confirmed",
    "Store Accepted",
    "Preparing Order",
    "Packed",
    "Delivery Partner Assigned",
    "On The Way",
    "Delivered",
  ];

  const [currentStage, setCurrentStage] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);

  // 5 Minute Countdown
  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev <= 1) {

          clearInterval(timer);

          return 0;

        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  // Auto Status Change (Demo)
  useEffect(() => {

    const progress = setInterval(() => {

      setCurrentStage((prev) => {

        if (prev >= stages.length - 1) {

          clearInterval(progress);

          return prev;

        }

        return prev + 1;

      });

    }, 10000);

    return () => clearInterval(progress);

  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (

    <div className="success-container">

      <div className="success-card">

        <FaCheckCircle className="success-icon"/>

        <h1>Order Confirmed 🎉</h1>

        <p>
          Thank you for ordering with <strong>Zippy</strong>.
          Your order has been received successfully.
        </p>

        <div className="eta-box">

          <FaMotorcycle className="bike-icon"/>

          <div>

            <span>Estimated Arrival</span>

            <h2>{minutes}:{seconds}</h2>

          </div>

        </div>

        <div className="tracker">

          {stages.map((stage,index)=>(

            <div
              key={index}
              className={
                index<=currentStage
                ? "tracker-item active"
                : "tracker-item"
              }
            >

              <div className="tracker-circle">

                {index<=currentStage ? "✓" : ""}

              </div>

              <span>{stage}</span>

            </div>

          ))}

        </div>

        <div className="success-buttons">

          <Link to="/orders">

            <button className="primary-btn">

              <FaBoxOpen/>

              View My Orders

            </button>

          </Link>

          <Link to="/products">

            <button className="secondary-btn">

              Continue Shopping

            </button>

          </Link>

        </div>

      </div>

      <div className="footer-watermark">

        © 2026 Zippy • Developed by <span>Mirza Junaid</span>

      </div>

    </div>

  );

}

export default OrderSuccess;