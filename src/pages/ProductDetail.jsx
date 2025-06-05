import React, { useEffect, useState, useContext, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../CSS/ProductDetail.css";
import { UserOutlined, StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { DataContext } from "../Context/DataContext";
import { AuthContext } from "../Context/AuthContext";
import ColorSelector from "../components/ColorSelector";
import LoginDropdown from "../components/LoginDropdown";
import Skeleton from "@mui/material/Skeleton";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { categories } = useContext(DataContext);
  const { user, logout } = useContext(AuthContext);
  const [selectedColor, setSelectedColor] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://ecommerce.ibradev.me/products/get/${id}`);
        setProduct(res.data);
        setSelectedColor(res.data.Colors?.[0] || null);
        setCurrentIndex(0);
      } catch (error) {
        console.error("Xəta baş verdi:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLogin(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePrev = () => {
    if (!product) return;
    setCurrentIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (!product) return;
    setCurrentIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="container navbar">
        <ul className="nav-links">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link to={`/${cat.slug}`}>{cat.name}</Link>
            </li>
          ))}
        </ul>
        <a href="/" className="logo">
          Emporium
        </a>

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
                width: "270px",
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
                      cursor: "pointer",
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

      {/* Məhsul Detalları */}
      <div className="product-detail-container">
        <div className="product-gallery">
          <div className="slider-wrapper">
            {loading ? (
              <Skeleton variant="rectangular" width={400} height={400} />
            ) : (
              <img
                src={product.images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="main-slider-image"
              />
            )}
          </div>

          {!loading && (
            <div className="thumbnail-list">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  onClick={() => setCurrentIndex(idx)}
                  className={idx === currentIndex ? "active" : ""}
                  alt={`Thumb ${idx}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="product-info">
          {loading ? (
            <>
              <Skeleton variant="text" width={300} height={50} />
              <Skeleton variant="text" width={200} />
              <Skeleton variant="text" width={250} />
            </>
          ) : (
            <>
              <h1>{product.name}</h1>
              <p className="description">{product.description}</p>
              <p className="price">Qiymət: ${product.price}</p>
              <p className="discount">Endirim: {product.discount}%</p>
              <p>
                <strong>Colors:</strong> {product.Colors?.join(", ")}
              </p>

              <ColorSelector
                colors={product.Colors}
                selectedColor={selectedColor}
                onSelect={setSelectedColor}
              />

              <div className="extra-info">
                <p>
                  <strong>Brand:</strong> {product.Brands?.name}
                </p>
                <p>
                  <strong>Category:</strong> {product.category?.name}
                </p>
                <p>
                  <strong>Sub Category:</strong> {product.subcategory?.name}
                </p>
                <p>
                  <strong>Sizes:</strong> {product.Size?.join(", ")}
                </p>
                <p>
                  <strong>Stock:</strong> {product.stock > 0 ? "Mövcuddur" : "Mövcud deyil"}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
