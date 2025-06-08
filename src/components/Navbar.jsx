import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserOutlined, ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { AuthContext } from "../Context/AuthContext";
import LoginDropdown from "./LoginDropdown";
import "../CSS/Navbar.css"; // Assuming you have a CSS file for styling

const Navbar = ({ categories = [] }) => {
    const [showLogin, setShowLogin] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { user, logout } = useContext(AuthContext);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowLogin(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        // <div className="container">
            <nav className="navbar container ">
                <div className="hamburger" onClick={toggleMenu}>&#9776;</div>

                <Link to="/" className="logo">Emporium</Link>

                <ul className={`nav-links ${menuOpen ? "show" : "hide"}`}>
                    {categories.length === 0 ? (
                        <li>Yüklənir...</li>
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

                <div className="nav-icon">
                    <UserOutlined
                        onClick={() => setShowLogin((prev) => !prev)}
                        style={{ cursor: "pointer", fontSize: 20 }}
                    />
                    <Link to="/wishlist" style={{ marginLeft: 15, fontSize: 20, color: "inherit" }}>
                        <HeartOutlined />
                    </Link>
                    <ShoppingCartOutlined style={{ marginLeft: 10, fontSize: 20 }} />

                    {showLogin && (
                        <div ref={dropdownRef} className="login-dropdown">
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
        // </div>
    );
};

export default Navbar;
