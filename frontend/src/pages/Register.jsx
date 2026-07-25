import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

import API from "../api/axios";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await API.post(
        "/auth/register",
        {
          name,
          email,
          password,
        }
      );

      alert(
        response.data.message ||
          "Registration Successful 🎉"
      );

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>🛵 Zippy</h1>

        <p className="subtitle">
          Create Your Account
        </p>

        <form onSubmit={handleRegister}>

          <div className="input-box">

            <FaUser className="input-icon" />

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />

          </div>

          <div className="input-box">

            <FaEnvelope className="input-icon" />

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>

          <div className="input-box">

            <FaLock className="input-icon" />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

          </div>

          <div className="input-box">

            <FaLock className="input-icon" />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              required
            />

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Create Account
          </button>

        </form>

        <p
          style={{
            color: "#fff",
            textAlign: "center",
            marginTop: "25px",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#facc15",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>
        </p>

      </div>

      <p className="developer">
        Developed by <span>Mirza Junaid</span>
      </p>

    </div>
  );
}

export default Register;