import React, { useContext, useEffect, useState, useRef } from "react";
import { WishlistContext } from "../Context/WishListContext";
import { Link } from "react-router-dom";
import { HeartFilled, UserOutlined, ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { AuthContext } from "../Context/AuthContext";
import LoginDropdown from "../components/LoginDropdown";
import "../CSS/Home.css";

const WishlistPage = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const { user, logout } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch("https://ecommerce.ibradev.me/categories/all")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Kateqoriya yükləmə xətası:", err));
  }, []);

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
    <div className="container">
      {/* Navbar - Home səhifəsindəki ilə eyni */}
      <nav className="container navbar">
        <ul className="nav-links">
          {categories.length === 0 ? (
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
          <Link to="/wishlist" style={{ marginLeft: 15, fontSize: 20, color: "inherit" }}>
            <HeartOutlined />
          </Link>
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

      {/* Wishlist */}
      <h2>Seçilmiş Məhsullar (Wishlist)</h2>
      {wishlist.length === 0 ? (
        <p>Heç bir məhsul seçilməyib.</p>
      ) : (
        <div className="product-grid">
          {wishlist.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className="product-card">
                <div
                  className="favorite-icon"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(product);
                  }}
                >
                  <HeartFilled style={{ fontSize: 20, color: "red" }} />
                </div>
                <img src={product.images?.[0]} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>{product.discount}% Endirim</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
