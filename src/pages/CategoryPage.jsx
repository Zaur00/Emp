import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DataContext } from "../Context/DataContext";
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
            <nav className="navbar" style={{ display: 'flex', justifyContent: 'left', padding: '5px 20px', gap: '20px', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
                <ul className="nav-links" style={{ display: 'flex', listStyle: 'none', gap: '1rem', padding: 0 }}>
                    {categories.map(cat => (
                        <li key={cat.id}>
                            <a href={`/${cat.slug}`} style={{ textDecoration: 'none', color: '#333' }}>{cat.name}</a>
                        </li>
                    ))}
                </ul>
                <a href="/" className="logo" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#000' }}>Emporium</a>
            </nav>

            {/* Main Content */}
            <div className="main-content" style={{ display: 'flex' }}>


                <section className="content" style={{ flex: 1, padding: '1rem' }}>
                    <h1 style={{ marginBottom: '1rem' }}>{category?.name || "Kateqoriya tapılmadı"}</h1>

                    {products.length === 0 ? (
                        <p>Bu kateqoriyada məhsul tapılmadı.</p>
                    ) : (
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                            gap: "1rem"
                        }}>
                            {products.map(product => (
                                <div key={product.id} style={{
                                    position: 'relative',
                                    border: "1px solid #ccc",
                                    padding: "1rem",
                                    borderRadius: "8px"
                                }}>
                                    <img
                                        src={product.images?.[0] || "/placeholder.jpg"}
                                        alt={product.name}
                                        style={{ width: "100%", height: "250px", objectFit: "cover", marginBottom: "0.5rem" }}
                                    />
                                    <h3>{product.name}</h3>
                                    <p style={{ marginBottom: '20px' }}>${product.price}</p>
                                    <p style={{ marginTop: '10px', position: 'absolute', bottom: '10px' }}  >{product.discount}% Discount</p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default CategoryPage;
