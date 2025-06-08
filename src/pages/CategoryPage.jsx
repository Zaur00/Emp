import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useEffect, useState, useContext } from "react";
import { WishlistContext } from "../Context/WishListContext";
import { DataContext } from "../Context/DataContext";
import { useParams, Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../CSS/CategoryPage.css";

const CategoryPage = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const { slug } = useParams();
  const { categories, loading: categoriesLoading } = useContext(DataContext);

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (categoriesLoading) return;

    const foundCategory = categories.find((cat) => cat.slug === slug);
    if (!foundCategory) {
      setProducts([]);
      setCategory(null);
      setLoading(false);
      return;
    }

    setCategory(foundCategory);

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://ecommerce.ibradev.me/products/all?limit=100");
        const allProducts = response.data.data || [];
        const filtered = allProducts.filter(
          (product) => product.categoryId === foundCategory.id
        );
        setProducts(filtered);
      } catch (error) {
        console.error("Məhsulları yükləmə zamanı xəta:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug, categories, categoriesLoading]);

  return (
    <div>
      <Navbar categories={categories} />

      <div className="container main-content">
        <section className="content">
          <div className="product-grid">
            {loading ? (
              Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="product-card">
                  <Skeleton variant="rectangular" width={255} height={380} />
                  <Skeleton width="80%" height={25} />
                  <Skeleton width="60%" height={20} />
                  <Skeleton width="50%" height={20} />
                </div>
              ))
            ) : products.length === 0 ? (
              <p>Bu kateqoriyada məhsul tapılmadı.</p>
            ) : (
              products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <div className="product-card">
                    <div
                      className="favorite-icon"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product);
                      }}
                    >
                      {wishlist.find((item) => item.id === product.id) ? (
                        <HeartFilled style={{ fontSize: 20, color: "red" }} />
                      ) : (
                        <HeartOutlined style={{ fontSize: 20, color: "gray" }} />
                      )}
                    </div>

                    <img src={product.images?.[0]} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <p>{product.discount}% Endirim</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CategoryPage;
