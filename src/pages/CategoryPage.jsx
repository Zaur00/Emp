import { useEffect, useState, useContext } from "react";
import { WishlistContext } from "../Context/WishListContext";
import { DataContext } from "../Context/DataContext";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../CSS/CategoryPage.css";

const CategoryPage = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const { categories, products: allProducts, loading: categoriesLoading } = useContext(DataContext);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await axios.get("https://ecommerce.ibradev.me/brands/all");
        setBrands(res.data || []);
      } catch (err) {
        console.error("Brendlər yüklənərkən xəta:", err);
        setBrands([]);
      }
    };

    fetchBrands();
  }, []);

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
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug, categories, categoriesLoading]);

  const isParentCategory = category && category.children?.length > 0;

  return (
    <div>

      <div className="container main-content">
        <h2 style={{ fontSize: "24px", fontWeight: "bold", fontFamily: "MontserratAce', sans-serif" }} className="category-title">{category?.name}</h2>

        {isParentCategory && (
          <>
            <div className="subcategory-grid">
              {category.children.map((child) => (
                <Link to={`/category/${child.slug}`} key={child.id} className="subcategory-card">
                  <div>
                    <img src={child.image || "https://via.placeholder.com/150"} alt={child.name} />
                    <p>{child.name}</p>
                    <button>SHOP NOW</button>
                  </div>
                </Link>
              ))}
            </div>

            <div className="brand-grid">
              {brands.map((brand) => (
                <Link to={`/brand/${brand.slug}`} key={brand.id} className="brand-card">
                  <div>
                    <img src={brand.image || "https://via.placeholder.com/100"} alt={brand.name} />
                    <p>{brand.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}


        {category?.isParent ? (
          <>
            <div className="product-grid">
              {products.slice(0, 4).map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <div className="product-card">
                    <img src={product.images?.[0]} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="brand-section">
              <h2>Popular Brands</h2>
              <div className="brand-list">
                {brands
                  .filter((brand) =>
                    allProducts.some(
                      (product) =>
                        product.Brand?.id === brand.id &&
                        product.category?.parentId === category.id
                    )
                  )
                  .map((brand) => (
                    <div key={brand.id} className="brand-card">
                      <img src={brand.logo || "/placeholder.png"} alt={brand.name} />
                      <h4>{brand.name}</h4>
                      <Link to={`/brand/${brand.slug}`} className="shop-now-link">
                        Shop Now
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div className="product-card">
                  <img src={product.images?.[0]} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default CategoryPage;
