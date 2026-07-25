import { useEffect, useState } from "react";
import API from "../api/axios";
import "../styles/Products.css";

import HomeHeader from "../components/HomeHeader";
import SearchBar from "../components/SearchBar";
import BannerSlider from "../components/BannerSlider";
import Categories from "../components/Categories";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await API.get("/products");
        setProducts(response.data.products || []);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };

    getProducts();
  }, []);

  const addToCart = async (productId) => {
    try {
      const response = await API.post("/cart", {
        productId,
        quantity: 1,
      });

      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add to cart");
    }
  };

  const filteredProducts = products.filter((product) => {
    const keyword = search.toLowerCase();

    const matchesSearch =
      product.name?.toLowerCase().includes(keyword) ||
      product.category?.toLowerCase().includes(keyword) ||
      product.description?.toLowerCase().includes(keyword);

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <HomeHeader />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <BannerSlider />

      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <h2 className="section-heading">
        🔥 Popular Products
      </h2>

      <div className="products-grid">
        {filteredProducts.length === 0 ? (
          <h2>No Products Found</h2>
        ) : (
          filteredProducts.map((product) => (
            <div
              className="product-card"
              key={product._id}
            >
              <img
                src={
                  product.image ||
                  "https://via.placeholder.com/400x250"
                }
                alt={product.name}
              />

              <div className="product-info">
                <span className="category">
                  {product.category}
                </span>

                <h2>{product.name}</h2>

                <p>{product.description}</p>

                <div className="price-row">
                  <h3>₹{product.price}</h3>

                  <span className="stock">
                    In Stock
                  </span>
                </div>

                <button
                  className="cart-btn"
                  onClick={() => addToCart(product._id)}
                >
                  Add To Cart 🛒
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <footer className="products-footer">
        © 2026 Zippy • Developed by
        <span> Mirza Junaid</span>
      </footer>
    </div>
  );
}

export default Products;