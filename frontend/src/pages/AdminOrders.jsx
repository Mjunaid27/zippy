import AdminSidebar from "../components/AdminSidebar";
import "../styles/Admin.css";

function AdminOrders() {

  return (

    <div className="admin-layout">

      <AdminSidebar />

      <div className="admin-content">

        <h1>🛒 Order Management</h1>

        <table className="admin-table">

          <thead>

            <tr>

              <th>Customer</th>

              <th>Address</th>

              <th>Total</th>

              <th>Payment</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>Mirza Junaid</td>

              <td>Karimnagar</td>

              <td>₹249</td>

              <td>Cash on Delivery</td>

              <td>

                <select>

                  <option>Pending</option>

                  <option>Accepted</option>

                  <option>Preparing</option>

                  <option>Packed</option>

                  <option>Out for Delivery</option>

                  <option>Delivered</option>

                </select>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default AdminOrders;