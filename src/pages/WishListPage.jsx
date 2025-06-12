import React, { useContext, useEffect, useState } from "react";
import { WishlistContext } from "../Context/WishListContext";
import { Link } from "react-router-dom";
import { HeartFilled } from "@ant-design/icons";
import Navbar from "../components/Navbar";
import "../CSS/WishListPage.css"; 

const WishlistPage = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://ecommerce.ibradev.me/categories/all")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Kateqoriya yükləmə xətası:", err));
  }, []);

  return (
    <div className="container">
      <Navbar categories={categories} />

      <h2>Wishlist</h2>
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
