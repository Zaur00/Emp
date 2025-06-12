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

  const isInWishlist = wishlist.some((item) => item.id === product?.id);

  return (
    <div>
      <Navbar categories={categories} />

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
                  onMouseEnter={() => setCurrentIndex(idx)}
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
              <p><strong>Colors:</strong> {product.Colors?.join(", ")}</p>

              <ColorSelector
                colors={product.Colors}
                selectedColor={selectedColor}
                onSelect={setSelectedColor}
              />

              <div className="extra-info">
                <p><strong>Brand:</strong> {product.Brands?.name}</p>
                <p><strong>Category:</strong> {product.category?.name}</p>
                <p><strong>Sub Category:</strong> {product.subcategory?.name}</p>
                <p><strong>Sizes:</strong> {product.Size?.join(", ")}</p>
                <p><strong>Stock:</strong> {product.stock > 0 ? "Mövcuddur" : "Mövcud deyil"}</p>
              </div>

              {/* ⭐️ ƏMƏLİYYAT DÜYMƏLƏRİ */}
              <div className="product-actions">
                {isInCart(product.id, product.Size?.[0]) ? (
                  <button className="go-to-cart" onClick={() => navigate("/cart")}>
                    SƏBƏTƏ KEÇ
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
                    SƏBƏTƏ ƏLAVƏ ET
                  </button>
                )}
                <button
                  className="add-to-wishlist"
                  onClick={() => toggleWishlist(product)}
                >
                  {isInWishlist ? "SEÇİLMİŞDƏDİR" : "SEÇİLMİŞLƏRƏ ƏLAVƏ ET"}
                </button>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
