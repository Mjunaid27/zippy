import AdminSidebar from "../components/AdminSidebar";
import "../styles/Admin.css";

function AdminDashboard() {
  return (
    <div className="admin-layout">

      <AdminSidebar />

      <div className="admin-content">

        <h1>Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h2>👥 Users</h2>
            <h1>1</h1>
          </div>

          <div className="card">
            <h2>📦 Products</h2>
            <h1>1</h1>
          </div>

          <div className="card">
            <h2>🛒 Orders</h2>
            <h1>2</h1>
          </div>

          <div className="card">
            <h2>💰 Revenue</h2>
            <h1>₹747</h1>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;