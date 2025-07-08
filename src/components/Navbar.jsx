import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { CartContext } from "../Context/CartContext";
import { AuthContext } from "../Context/AuthContext";
import LoginDropdown from "./LoginDropdown";
import CartSideBar from "./CartSideBar";
import "../CSS/Navbar.css";

const Navbar = ({ categories = [] }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("az");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [matchedBrand, setMatchedBrand] = useState("");

  const dropdownRef = useRef(null);
  const { user, logout } = useContext(AuthContext);
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowLogin(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <>
      <nav className="navbar container">
        <ul className="nav-links">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link to={`/${cat.slug}`}>{cat.name}</Link>
            </li>
          ))}
        </ul>

        <Link to="/" className="logo emporium-font">emporium</Link>


        <div className="nav-right">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="lang-selector"
          >
            <option value="az">AZ</option>
            <option value="en">EN</option>
          </select>

          <div className="search-wrapper">
            <input
              type="text"
              placeholder={language === "az" ? "Axtar..." : "Search..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchOpen(true)}
              onKeyDown={(e) => e.key === "Enter" && setIsSearchOpen(true)}
            />
            <button onClick={() => setIsSearchOpen(true)}>
              <SearchOutlined />
            </button>
          </div>

          <UserOutlined
            onClick={() => setShowLogin((prev) => !prev)}
            style={{ cursor: "pointer", fontSize: 20 }}
          />
          <Link to="/wishlist" style={{ fontSize: 20, color: "inherit" }}>
            <HeartOutlined />
          </Link>
          <ShoppingCartOutlined
            style={{ fontSize: 20 }}
            onClick={() => setCartOpen((prev) => !prev)}
          />

          {showLogin && (
            <div ref={dropdownRef} className="login-dropdown">
              {!user ? (
                <LoginDropdown onClose={() => setShowLogin(false)} />
              ) : (
                <div style={{ textAlign: "center" }}>
                  <p>
                    Hello, <span style={{ color: "#1890ff" }}>{user.email}</span>
                  </p>
                  <button
                    onClick={() => {
                      logout();
                      setShowLogin(false);
                    }}
                    className="logout-button"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {isSearchOpen && (
        <div className="search-modal">
          <span className="close-icon" onClick={() => setIsSearchOpen(false)}>
            ×
          </span>
          <h1 className="modal-logo">emporium</h1>

          <div className="modal-search-wrapper">
            <input
              type="text"
              placeholder={language === "az" ? "Axtar..." : "Search..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <button><SearchOutlined /></button>
          </div>

          {matchedBrand && (
            <div className="search-results">
              <h3>{matchedBrand} məhsulları:</h3>
              <ul className="product-list">
                {filteredProducts.map((item) => (
                  <li
                    key={item.id}
                    className="product-item"
                    onClick={() => {
                      navigate(`/product/${item.id}`);
                      setIsSearchOpen(false);
                    }}
                  >
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p>{item.name}</p>
                      <small>{item.brand}</small>
                      <strong>{item.price} AZN</strong>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {cartOpen && (
        <CartSideBar
          cartItems={cartItems}
          onClose={() => setCartOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </>
  );
};

export default Navbar;
