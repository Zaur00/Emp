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

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("en");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
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

  useEffect(() => {
    fetch("https://ecommerce.ibradev.me/categories/all")
      .then((res) => res.json())
      .then((data) => setCategoriesData(data));

    fetch("https://ecommerce.ibradev.me/products/all?limit=100")
      .then((res) => res.json())
      .then((data) => {
        const fetchedProducts = Array.isArray(data)
          ? data
          : data?.data?.products || [];
        setProducts(fetchedProducts);
      });

    fetch("https://ecommerce.ibradev.me/brands/all")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    const term = searchTerm.toLowerCase();
    const results = [];

    categoriesData.forEach((cat) => {
      if (cat.name.toLowerCase().includes(term)) {
        results.push({ type: "category", name: cat.name, slug: cat.slug });
      }

      cat.Subcategory?.forEach((sub) => {
        if (sub.name.toLowerCase().includes(term)) {
          results.push({
            type: "subcategory",
            name: sub.name,
            categoryName: cat.name,
            slug: sub.slug,
          });
        }
      });
    });

    brands.forEach((brand) => {
      if (brand.name.toLowerCase().includes(term)) {
        results.push({
          type: "brand",
          name: brand.name,
          slug: brand.slug,
        });

        products.forEach((product) => {
          if (
            product.Brand?.slug?.toLowerCase() === brand.slug.toLowerCase()
          ) {
            results.push({
              type: "product",
              name: product.name,
              price: product.price,
              image: product.image,
              id: product.id,
            });
          }
        });
      }
    });

    (Array.isArray(products) ? products : []).forEach((product) => {
      if (product.name.toLowerCase().includes(term)) {
        results.push({
          type: "product",
          name: product.name,
          price: product.price,
          image: product.image,
          id: product.id,
        });
      }
    });

    setSearchResults(results);
  }, [searchTerm, categoriesData, products, brands]);

  const handleSearchResultClick = (res) => {
    if (res.type === "category") navigate(`/${res.slug}`);
    else if (res.type === "subcategory") navigate(`/subcategory/${res.slug}`);
    else if (res.type === "product") navigate(`/product/${res.id}`);
    else if (res.type === "brand") navigate(`/brand/${res.slug}`);
    setIsSearchOpen(false);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar container">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : "hide"}`}>
          {categoriesData.map((cat) => (
            <li key={cat.id}>
              <Link to={`/${cat.slug}`} onClick={() => setMenuOpen(true)}>
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <Link to="/" className="logo emporium-font">
          emporium
        </Link>

        {/* Right Icons */}
        <div className="nav-right">
          {showLogin && (
            <div ref={dropdownRef} className="login-dropdown">
              {!user ? (
                <LoginDropdown onClose={() => setShowLogin(false)} />
              ) : (
                <div style={{ textAlign: "center" }}>
                  <p>
                    Hello,{" "}
                    <span style={{ color: "#1890ff" }}>{user.email}</span>
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

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="lang-selector"
          >
            <option value="az">AZ</option>
            <option value="en">EN</option>
          </select>

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
        </div>

        {/* Search */}
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
      </nav>

      {/* Search Modal */}
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
            <button>
              <SearchOutlined />
            </button>
          </div>

          {searchResults.length > 0 ? (
            <div className="search-results">
              <ul className="product-list">
                {searchResults.map((res, index) => (
                  <li
                    key={index}
                    className="product-item"
                    onClick={() => handleSearchResultClick(res)}
                    style={{ cursor: "pointer" }}
                  >
                    {res.type === "product" ? (
                      <>
                        <img src={res.image} alt={res.name} />
                        <div>
                          <p>{res.name}</p>
                          <strong>{res.price} AZN</strong>
                        </div>
                      </>
                    ) : (
                      <div>
                        <p style={{ fontWeight: "bold" }}>{res.name}</p>
                        {res.categoryName && (
                          <small>{res.categoryName} bölməsində</small>
                        )}
                        <span style={{ fontSize: "12px", color: "#888" }}>
                          ({res.type})
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <em>Uyğun nəticə tapılmadı.</em>
            </div>
          )}
        </div>
      )}

      {/* Cart Sidebar */}
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
