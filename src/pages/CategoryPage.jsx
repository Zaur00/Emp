import React, { useEffect, useState, useContext, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { DataContext } from "../Context/DataContext";
import { AuthContext } from "../Context/AuthContext";
import { UserOutlined, StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import LoginDropdown from "../components/LoginDropdown";
import Skeleton from "@mui/material/Skeleton";
import "../CSS/CategoryPage.css";

const CategoryPage = () => {
  const { slug } = useParams();
  const { categories, loading: categoriesLoading } = useContext(DataContext);
  const { user, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (categoriesLoading) return;

    const foundCategory = categories.find((cat) => cat.slug === slug);
    if (!foundCategory) {
      setProducts([]);
      setCategory(null);
      setLoading(false);
      return;
    }
    setCategory(foundCategory);

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://ecommerce.ibradev.me/products/all");
        const allProducts = response.data.data || [];
        const filtered = allProducts.filter(
          (product) => product.categoryId === foundCategory.id
        );
        setProducts(filtered);
      } catch (error) {
        console.error("Məhsulları yükləmə zamanı xəta:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug, categories, categoriesLoading]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLogin(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="container navbar">
        <ul className="nav-links">
          {categoriesLoading ? (
            <li>Yüklənir...</li>
          ) : (
            categories.map((cat) => (
              <li key={cat.id}>
                <Link to={`/${cat.slug}`}>{cat.name}</Link>
              </li>
            ))
          )}
        </ul>

        <a href="/" className="logo">Emporium</a>

        <div className="nav-icon" style={{ position: "relative" }}>
          <UserOutlined
            onClick={() => setShowLogin((prev) => !prev)}
            style={{ cursor: "pointer", fontSize: 20 }}
          />
          <StarOutlined style={{ marginLeft: 10, fontSize: 20 }} />
          <ShoppingCartOutlined style={{ marginLeft: 10, fontSize: 20 }} />

          {showLogin && (
            <div
              ref={dropdownRef}
              style={{
                position: "absolute",
                top: "40px",
                right: "0",
                zIndex: 1000,
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                width: "270px"
              }}
            >
              {!user ? (
                <LoginDropdown onClose={() => setShowLogin(false)} />
              ) : (
                <div style={{ textAlign: "center" }}>
                  <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
                    Salam, <span style={{ color: "#1890ff" }}>{user}</span>
                  </p>
                  <button
                    onClick={() => {
                      logout();
                      setShowLogin(false);
                    }}
                    style={{
                      background: "#f5222d",
                      color: "#fff",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    Çıxış et
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="container main-content">
        <section className="content">
          <div className="product-grid">
            {loading ? (
              Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="product-card">
                  <Skeleton variant="rectangular" width={255} height={380} />
                  <Skeleton width="80%" height={25} />
                  <Skeleton width="60%" height={20} />
                  <Skeleton width="50%" height={20} />
                </div>
              ))
            ) : products.length === 0 ? (
              <p>Bu kateqoriyada məhsul tapılmadı.</p>
            ) : (
              products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <div className="product-card">
                    <img src={product.images?.[0]} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <p>{product.discount}% Discount</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CategoryPage;
