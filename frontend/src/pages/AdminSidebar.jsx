import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="sidebar">

      <h2>ZIPPY</h2>

      <Link to="/admin/dashboard">🏠 Dashboard</Link>

      <Link to="/admin/products">📦 Products</Link>

      <Link to="/admin/orders">🛒 Orders</Link>

      <Link to="/admin/users">👥 Users</Link>

      <hr style={{margin:"20px 0",opacity:0.3}} />

      <Link to="/products">🚀 Customer App</Link>

    </div>
  );
}

export default AdminSidebar;