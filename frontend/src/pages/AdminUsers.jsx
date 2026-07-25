import AdminSidebar from "../components/AdminSidebar";
import "../styles/Admin.css";

function AdminUsers() {

  return (

    <div className="admin-layout">

      <AdminSidebar />

      <div className="admin-content">

        <h1>👥 Users</h1>

        <table className="admin-table">

          <thead>

            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Role</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>Mirza Junaid</td>

              <td>mirza@gmail.com</td>

              <td>User</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default AdminUsers;