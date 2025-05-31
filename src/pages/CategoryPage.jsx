import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import { UserOutlined, StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "../CSS/CategoryPage.css";

const CategoryPage = () => {
    const { slug } = useParams();
    const { categories } = useContext(DataContext);

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        if (!categories.length) return;
        const foundCategory = categories.find(cat => cat.slug === slug);
        if (!foundCategory) {
            setProducts([]);
            setCategory(null);
            return;
        }
        setCategory(foundCategory);
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://ecommerce.ibradev.me/products/all");
                const allProducts = response.data.data || [];
                const filtered = allProducts.filter(product => product.categoryId === foundCategory.id);
                setProducts(filtered);
            } catch (error) {
                console.error("Məhsulları yükləmə zamanı xəta:", error);
            }
        };

        fetchProducts();
    }, [slug, categories]);

    return (
        <div>
            {/* Navbar */}
            <nav className="container navbar" >
                <ul className="nav-links" >
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

            {/* Main Content */}
            <div className=" container main-content" >
                <section className="content" >

                    {products.length === 0 ? (
                        <p>Bu kateqoriyada məhsul tapılmadı.</p>
                    ) : (
                        <div className="product-grid" >
                            {products.map(product => (
                                <Link to={`/product/${product.id}`} key={product.id}>
                                    <div className="product-card">
                                        <img src={product.images?.[0]} alt={product.name} />
                                        <h3>{product.name}</h3>
                                        <p>${product.price}</p>
                                        <p>{product.discount}% Discount</p>
                                    </div>
                                </Link>
                            ))}

                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default CategoryPage;
