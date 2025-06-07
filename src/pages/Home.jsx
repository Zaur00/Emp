import React, { useEffect, useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { UserOutlined, ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import Skeleton from "@mui/material/Skeleton";
import LoginDropdown from "../components/LoginDropdown";
import { AuthContext } from "../Context/AuthContext";
import "../CSS/Home.css";

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [showLogin, setShowLogin] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);  // Hamburger menyu açılıb-bağlanması üçün
    const dropdownRef = useRef(null);
    const { user, logout } = useContext(AuthContext);

    useEffect(() => {
        fetch("https://ecommerce.ibradev.me/categories/all")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.error("Kateqoriya yükləmə xətası:", err));
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowLogin(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Hamburger klik funksiyası
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const images = [
        "https://cdn-cloudflare.emporium.az/home-page/cat_228.jpg?v=1.8.40",
        "https://cdn-cloudflare.emporium.az/home-page/cat_65.jpg?v=1.8.40",
        "https://cdn-cloudflare.emporium.az/home-page/cat_1.jpg?v=1.8.40",
        "https://cdn-cloudflare.emporium.az/home-page/cat_189.jpg?v=1.8.40",
        "https://cdn-cloudflare.emporium.az/home-page/cat_297.jpg?v=1.8.40",
        "https://cdn-cloudflare.emporium.az/home-page/cat_264.jpg?v=1.8.40",
    ];

    return (
        <div>
            <nav className="container navbar" >
                {/* Logo */}

                {/* Hamburger ikon */}
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776; {/* ☰ unicode */}
                </div>

                {/* Nav links, açılıb-bağlanır */}
                <ul className={`nav-links ${menuOpen ? "fullscreen" : "hide"}`}>

                    {categories.length === 0 ? (
                        <li>Yüklənir...</li>
                    ) : (
                        categories.map((cat) => (
                            <li key={cat.id}>
                                <Link to={`/${cat.slug}`} onClick={() => setMenuOpen(true)}>{cat.name}</Link>
                            </li>
                        ))
                    )}
                </ul>
                <Link to="/" className="logo">Emporium</Link>

                {/* User & Cart Icons */}
                <div className="nav-icon" >
                    <UserOutlined
                        onClick={() => setShowLogin((prev) => !prev)}
                        style={{ cursor: "pointer", fontSize: 20 }}
                    />
                    <Link to="/wishlist" style={{ marginLeft: 15, fontSize: 20, color: "inherit" }}>
                        <HeartOutlined />
                    </Link>
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
                                padding: "10px",
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

            {/* Kateqoriya Grid */}
            <section className="container bottom-categories">
                <div className="category-grid">
                    {categories.length === 0
                        ? Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} style={{ margin: "10px" }}>
                                <Skeleton variant="rectangular" width={300} height={250} />
                            </div>
                        ))
                        : categories.map((cat) => (
                            <a key={cat.id} href={`/${cat.slug}`}>
                                <img src={images[cat.id % images.length]} alt={cat.name} />
                                <div className="category-name">{cat.name}</div>
                            </a>
                        ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
