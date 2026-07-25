import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaClipboardList,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";

import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <Link to="/">
          <span className="logo-text">Zippy</span>
          <span className="logo-tagline">Fast Delivery</span>
        </Link>
      </div>

      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search food, groceries..."
        />
      </div>

      <nav className="nav-menu">
        <Link to="/products">Products</Link>

        <Link to="/cart">
          <FaShoppingCart /> Cart
        </Link>

        <Link to="/orders">
          <FaClipboardList /> Orders
        </Link>

        <Link to="/login" className="profile-btn">
          <FaUserCircle /> Login
        </Link>
      </nav>

    </header>
  );
}

export default Navbar;