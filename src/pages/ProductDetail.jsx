import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../CSS/ProductDetail.css";
import { UserOutlined, StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { DataContext } from "../Context/DataContext";
import ColorSelector from "../components/ColorSelector"; // Assuming you have a ColorSelector component

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const { categories } = useContext(DataContext);
    const [selectedColor, setSelectedColor] = useState(null);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`https://ecommerce.ibradev.me/products/get/${id}`);
                setProduct(res.data);
                setCurrentIndex(0); // ilk şəkli göstər
            } catch (error) {
                console.error("Xəta baş verdi:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <p className="loading">Yüklənir...</p>;
    if (!product) return <p className="not-found">Məhsul tapılmadı.</p>;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="container navbar">
                <ul className="nav-links">
                    {categories.map(cat => (
                        <li key={cat.id}>
                            <Link to={`/${cat.slug}`}>{cat.name}</Link>
                        </li>
                    ))}
                </ul>
                <a href="/" className="logo">Emporium</a>
                <Link to="/profile" className="nav-icon">
                    <UserOutlined />
                    <StarOutlined />
                    <ShoppingCartOutlined />
                </Link>
            </nav>

            {/* Məhsul Detalları */}
            <div className="product-detail-container">
                <div className="product-gallery">
                    <div className="slider-wrapper">
                        <button className="slider-btn prev" onClick={handlePrev}>&larr;</button>
                        <img
                            src={product.images[currentIndex]}
                            alt={`Image ${currentIndex + 1}`}
                            className="main-slider-image"
                        />
                        <button className="slider-btn next" onClick={handleNext}>&rarr;</button>

                    </div>
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
                </div>

                <div className="product-info">
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
                        <p><strong>Stock:</strong> {product.stock > 0 ? "Mövcuddur" : "Out of Stock"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
