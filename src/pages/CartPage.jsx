import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishListContext";
import "../CSS/CartPage.css";
import { HeartOutlined } from "@ant-design/icons";
import { HeartFilled } from "@ant-design/icons";

const CartPage = () => {
    const { cartItems, removeFromCart, totalAmount } = useContext(CartContext);
    const { toggleWishlist, wishlist } = useContext(WishlistContext);

    return (
        <div className="cart-page">
            <div className="cart-left">
                <h2>Səbət</h2>
                <p>{cartItems.length} məhsul</p>

                {cartItems.map((item, idx) => (
                    <div className="cart-item" key={idx}>
                        <img src={item.image} alt={item.name} className="cart-item-image" />

                        <div className="cart-item-details">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>ÖLÇÜ: {item.size}</p>
                            <p>SAY: {item.quantity}</p>
                            <p>{item.price} AZN</p>

                            <div
                                className="wishlist-icon"
                                onClick={() => toggleWishlist(item)}
                                style={{
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    marginTop: "10px"
                                }}
                            >
                                {wishlist.find((w) => w.id === item.id) ? (
                                    <>
                                        <HeartFilled style={{ fontSize: 20, color: "red" }} />
                                        <span style={{ color: "red" }}>SEÇİLMİŞDƏDİR</span>
                                    </>
                                ) : (
                                    <>
                                        <HeartOutlined style={{ fontSize: 20, color: "black" }} />
                                        <span style={{ color: "black" }}>SEÇİLMİŞLƏRƏ ƏLAVƏ ET</span>
                                    </>
                                )}
                            </div>
                        </div>



                        <button
                            className="remove-button"
                            onClick={() => removeFromCart(item.id, item.size)}
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <h3>Sifarişin yekunu</h3>
                <div className="summary-row">
                    <span>CƏMİ</span>
                    <span>{totalAmount} AZN</span>
                </div>
                <div className="summary-row">
                    <span>ÇATDIRILMA</span>
                    <span>ÖDƏNİŞSİZ</span>
                </div>
                <div className="summary-row input-row">
                    <label>PROMO KOD (MOBİL NÖMRƏ)</label>
                    <input type="text" placeholder="Mobil nömrə" />
                </div>
                <div className="summary-row total">
                    <span>YEKUN</span>
                    <span>{totalAmount} AZN</span>
                </div>
                <button className="checkout-button">SİFARİŞİ TAMAMLA</button>
            </div>
        </div>
    );
};

export default CartPage;
