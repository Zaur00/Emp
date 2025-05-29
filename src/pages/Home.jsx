// 📁 src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import CategorySidebar from "../components/CategorySidebar";
import { Link } from "react-router-dom";
import "../CSS/Home.css"; // Assuming you have a CSS file for styles
import { UserOutlined } from "@ant-design/icons"; // Assuming you want to use this icon
import { StarOutlined } from "@ant-design/icons"; // Assuming you want to use this icon
import { ShoppingCartOutlined } from "@ant-design/icons"; // Assuming you want to use this icon
const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://ecommerce.ibradev.me/categories/all")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error("Kateqoriya yükləmə xətası:", err));
    }, []);
    const images = [
        "https://cdn-cloudflare.emporium.az/home-page/cat_1.jpg?v=1.8.40",
        "https://cdn-cloudflare.emporium.az/home-page/cat_65.jpg?v=1.8.40",
        "https://cdn-cloudflare.emporium.az/home-page/cat_189.jpg?v=1.8.40",
        "https://cdn-cloudflare.emporium.az/home-page/cat_264.jpg?v=1.8.40",
        "https://cdn-cloudflare.emporium.az/home-page/cat_297.jpg?v=1.8.40",
        "https://cdn-cloudflare.emporium.az/home-page/cat_228.jpg?v=1.8.40",
    ]


    return (
        <div>
            {/* Navbar */}
            <nav className="container navbar">
                <ul className="nav-links">
                    {categories.map((cat) => (
                        <li key={cat.id}>
                            <Link to={`/${cat.slug}`} >{cat.name}</Link>
                        </li>
                    ))}
                </ul>
                <a href="/" className="logo" >Emporium</a>
                <Link to="/profile" className="nav-icon">
                    <UserOutlined />
                    <StarOutlined />
                    <ShoppingCartOutlined />
                </Link>
            </nav>
            {/* Bottom Category Grid */}
            <section className="container bottom-categories" >
                <div className="category-grid">
                    {categories.map((cat) => (
                        <a
                            key={cat.id}
                            href={`/${cat.slug}`}>
                            <img
                                src={images[cat.id % images.length]}
                                alt={cat.name} />
                            <div className="category-name" >
                                {cat.name}
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>

    );
};

export default Home;
