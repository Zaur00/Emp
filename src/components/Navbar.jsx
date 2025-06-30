import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
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

const Navbar = ({ categories = [], allProducts = [] }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("en");

  const dropdownRef = useRef(null);
  const { user, logout } = useContext(AuthContext);
  const { cartItems, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLogin(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleSearch = () => {
    const filtered = allProducts.filter(
      (product) =>
        product.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered result:", filtered);
    // Əgər istəsəniz: setFilteredData(filtered)
  };

  return (
    <>
      <nav className="navbar container">
        <div className="nav-left">
          <div className="hamburger">&#9776;</div>
          <ul className={`nav-links ${menuOpen ? "show" : "hide"}`}></ul>

        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>

        <Link to="/" className="logo">
          Emporium
        </Link>
        <ul className={`nav-links ${menuOpen ? "show" : "hide"}`}>
          {categories.length === 0 ? (
            <li>Loading...</li>
          ) : (
            categories.map((cat) => (
              <li key={cat.id}>
                <Link to={`/${cat.slug}`} onClick={() => setMenuOpen(false)}>
                  {cat.name}
                </Link>
              </li>
            ))
          )}
        </ul>
        <div className="nav-right">
          <div className="nav-search-lang">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="lang-selector"
            >
              <option value="en">EN</option>
              <option value="az">AZ</option>
            </select>

            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search brand or model..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button onClick={handleSearch}>
                <SearchOutlined />
              </button>
            </div>
          </div>

          <UserOutlined
            onClick={() => setShowLogin((prev) => !prev)}
            style={{ cursor: "pointer", fontSize: 20 }}
          />

          <Link
            to="/wishlist"
            style={{ marginLeft: 15, fontSize: 20, color: "inherit" }}
          >
            <HeartOutlined />
          </Link>

          <ShoppingCartOutlined
            style={{ marginLeft: 10, fontSize: 20 }}
            onClick={() => setCartOpen((prev) => !prev)}
          />

          {showLogin && (
            <div ref={dropdownRef} className="login-dropdown">
              {!user ? (
                <LoginDropdown onClose={() => setShowLogin(false)} />
              ) : (
                <div style={{ textAlign: "center" }}>
                  <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
                    Hello,{" "}
                    <span style={{ color: "#1890ff" }}>{user.email}</span>
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
                      cursor: "pointer",
                    }}
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

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
