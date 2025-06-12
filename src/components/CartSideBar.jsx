import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import "../CSS/CartSidebar.css"; // Stil faylı ayrıca izah ediləcək

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : "close"}`}>

      <div className="cart-header">
        <h3>Səbət</h3>
        <span className="close-btn" onClick={onClose}>×</span>
      </div>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Səbət boşdur</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <strong>{item.name}</strong>
                <p>ÖLÇÜ: {item.size}</p>
                <p>SAY: {item.quantity}</p>
                <p>{item.price} AZN</p>
              </div>
              <span className="remove-btn" style={{ cursor: "pointer" }} onClick={() => removeFromCart(item.id, item.size)}>×</span>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-summary">

          <div style={{ display: "flex", justifyContent: "space-between", margin: '10px 0' }}><span>Cəmi</span><span>{totalPrice} AZN</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", margin: '10px 0' }}><span>Çatdırılma</span><span>Ödənişsiz</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", margin: '10px 0' }} className="total"><span>Yekun</span><span>{totalPrice} AZN</span></div>

          <div className="btn">
            <Link style={{ textDecoration: "none", textAlign: "center" }} to="/cart" className="checkout-btn">SƏBƏTƏ KEÇ</Link>
            <Link style={{ textDecoration: "none", textAlign: "center" }} to="" className="continue-text">ALIŞ-VERİŞƏ DAVAM ET</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
