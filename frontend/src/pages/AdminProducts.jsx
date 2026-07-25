import { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import API from "../api/axios";
import "../styles/Admin.css";

function AdminProducts() {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await API.get("/products");
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="admin-layout">

      <AdminSidebar />

      <div className="admin-content">

        <div className="admin-header">

          <h1>📦 Product Management</h1>

          <button className="add-btn">
            + Add Product
          </button>

        </div>

        <table className="admin-table">

          <thead>

            <tr>

              <th>Name</th>

              <th>Category</th>

              <th>Price</th>

              <th>Stock</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {products.map((product) => (

              <tr key={product._id}>

                <td>{product.name}</td>

                <td>{product.category}</td>

                <td>₹{product.price}</td>

                <td>{product.stock}</td>

                <td>

                  <button className="edit-btn">
                    Edit
                  </button>

                  <button className="delete-btn">
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminProducts;