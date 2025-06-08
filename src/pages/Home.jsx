import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Navbar from "../components/Navbar";
import "../CSS/Home.css";

const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://ecommerce.ibradev.me/categories/all")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.error("Kateqoriya yükləmə xətası:", err));
    }, []);

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
            <Navbar categories={categories} />

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
