import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../CSS/ProductDetail.css";
import Skeleton from "@mui/material/Skeleton";
import { DataContext } from "../Context/DataContext";
import { WishlistContext } from "../Context/WishListContext";
import { CartContext } from "../Context/CartContext";
import ColorSelector from "../components/ColorSelector";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import SizeGuideModal from "../components/SizeGuideModal";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { categories } = useContext(DataContext);
  const [selectedColor, setSelectedColor] = useState(null);
  const navigate = useNavigate();
  const { toggleWishlist, wishlist } = useContext(WishlistContext);
  const { addToCart, isInCart } = useContext(CartContext);
  const [showSizeModal, setShowSizeModal] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://ecommerce.ibradev.me/products/get/${id}`
        );
        setProduct(res.data);
        setSelectedColor(res.data.Colors?.[0] || null);
        setCurrentIndex(0);
      } catch (error) {
        console.error("ERROR:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const isInWishlist = wishlist.some((item) => item.id === product?.id);

  return (
    <div>
      

      <div className="product-detail-container">
        {product && (
          <div className="breadcrumb">
            <Link to="/">Emporium</Link> &nbsp;/&nbsp;

            {product.category?.parent?.parent && (
              <>
                <Link to={`/category/${product.category.parent.parent.slug}`}>
                  {product.category.parent.parent.name}
                </Link> &nbsp;/&nbsp;
              </>
            )}

            {product.category?.parent && (
              <>
                <Link to={`/category/${product.category.parent.slug}`}>
                  {product.category.parent.name}
                </Link> &nbsp;/&nbsp;
              </>
            )}

            {product.category && (
              <>
                <Link to={`/category/${product.category.slug}`}>
                  {product.category.name}
                </Link> &nbsp;/&nbsp;
              </>
            )}

            {product.Brands && (
              <>
                <Link to={`/brand/${product.Brands.slug}`}>
                  {product.Brands.name}
                </Link> &nbsp;/&nbsp;
              </>
            )}

            <span>{product.name}</span>
          </div>

        )}

        <div style={{ display: "flex", gap: "20px", justifyContent: "left", textAlign: "center" }}>
          <div className="product-gallery">
            {!loading && (
              <div className="thumbnail-list">
                {product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    onClick={() => setCurrentIndex(idx)}
                    onMouseEnter={() => setCurrentIndex(idx)}
                    className={idx === currentIndex ? "active" : ""}
                    alt={`Thumb ${idx}`}
                  />
                ))}
              </div>
            )}
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
                <p className="price">Price: ${product.price}</p>
                <p className="discount">Discount: {product.discount}%</p>
                <p>
                  <strong>Colors:</strong> {product.Colors?.join(", ")}
                </p>

                <ColorSelector
                  colors={product.Colors}
                  selectedColor={selectedColor}
                  onSelect={setSelectedColor}
                />
                <p>
                  <strong>Sizes:</strong> {product.Size?.join(", ")}{" "}
                  <button
                    onClick={() => setShowSizeModal(true)}
                    className="size-guide-link"
                  >
                    View size guide
                  </button>
                </p>
                <SizeGuideModal
                  product={product}
                  show={showSizeModal}
                  onClose={() => setShowSizeModal(false)}
                />

                <div className="extra-info">
                  <p>
                    <strong>Brand:</strong> {product.Brands?.name}
                  </p>
                  <p>
                    <strong>Category:</strong> {product.category?.name}
                  </p>
                  <p>
                    <strong>Stock:</strong>{" "}
                    {product.stock > 0 ? "Mövcuddur" : "Mövcud deyil"}
                  </p>
                </div>

                {/* ⭐️ ƏMƏLİYYAT DÜYMƏLƏRİ */}
                <div className="product-actions">
                  {isInCart(product.id, product.Size?.[0]) ? (
                    <button
                      className="go-to-cart"
                      onClick={() => navigate("/cart")}
                    >
                      GO TO CART
                    </button>
                  ) : (
                    <button
                      className="add-to-cart"
                      onClick={() =>
                        addToCart({
                          id: product.id,
                          name: product.name,
                          image: product.images?.[0],
                          price: product.price,
                          size: product.Size?.[0],
                          quantity: 1,
                        })
                      }
                    >
                      ADD TO CART
                    </button>
                  )}
                  <button
                    className="add-to-wishlist"
                    onClick={() => toggleWishlist(product)}
                  >
                    {isInWishlist ? "REMOVE FROM WISHLIST" : "ADD TO WISHLIST"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
