import React, { useContext, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import "../CSS/BrandProductsPage.css";
import { SearchOutlined } from "@ant-design/icons";

const BrandProductsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { products, loading } = useContext(DataContext);

  const [sortOption, setSortOption] = useState("");
  const [limit, setLimit] = useState(0);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 99999 });
  const [discountOnly, setDiscountOnly] = useState(false);
  const [priceRangeInput, setPriceRangeInput] = useState({ min: 0, max: 99999 });

  const handleColorFilter = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    );
  };

  const filteredProducts = useMemo(() => {
    if (!slug || !products.length) return [];

    let filtered = products.filter(
      (product) =>
        product?.Brands?.slug?.toLowerCase() === slug.toLowerCase()
    );

    if (selectedColors.length > 0) {
      filtered = filtered.filter((product) =>
        selectedColors.some((selectedColor) =>
          product.Colors?.some?.(
            (productColor) =>
              productColor.toLowerCase() === selectedColor.toLowerCase()
          )
        )
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product.Brands?.name)
      );
    }

    if (selectedSizes.length > 0) {
      filtered = filtered.filter((product) =>
        product.Size?.some((size) => selectedSizes.includes(size))
      );
    }

    if (discountOnly) {
      filtered = filtered.filter((product) => product.discount > 0);
    }

    filtered = filtered.filter(
      (product) =>
        typeof product.price === "number" &&
        product.price >= priceRange.min &&
        product.price <= priceRange.max
    );

    if (sortOption === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (limit > 0) {
      filtered = filtered.slice(0, limit);
    }

    return filtered;
  }, [
    products,
    slug,
    sortOption,
    limit,
    selectedColors,
    selectedBrands,
    selectedSizes,
    discountOnly,
    priceRange,
  ]);

  return (
    <div className="brand-page-container">
      <h2 className="brand-page-title">{slug.replace(/-/g, " ")}</h2>

      <div className="brand-page-content">
        <aside className="brand-filter-sidebar">
          <div className="filter-section">
            <h4>Brendlər</h4>
            <ul>
              {[...new Set(products.map((p) => p.Brands?.name))].map((brand) => (
                <li key={brand}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() =>
                        setSelectedBrands((prev) =>
                          prev.includes(brand)
                            ? prev.filter((b) => b !== brand)
                            : [...prev, brand]
                        )
                      }
                    />
                    <span style={{ marginLeft: "6px" }}>{brand}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-section">
            <h4>Endirim</h4>
            <label>
              <input
                type="checkbox"
                checked={discountOnly}
                onChange={() => setDiscountOnly(!discountOnly)}
              />
              <span style={{ marginLeft: "6px" }}>Endirimli məhsullar</span>
            </label>
          </div>

          <div className="filter-section">
            <h4>Ölçülər</h4>
            <ul>
              {[...new Set(products.flatMap((p) => p.Size || []))].map((size) => (
                <li key={size}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedSizes.includes(size)}
                      onChange={() =>
                        setSelectedSizes((prev) =>
                          prev.includes(size)
                            ? prev.filter((s) => s !== size)
                            : [...prev, size]
                        )
                      }
                    />
                    <span style={{ marginLeft: "6px" }}>{size}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-section">
            <h4>Qiymət</h4>
            <div className="price-range">
              <input
                type="number"
                placeholder="Min"
                value={priceRangeInput.min}
                onChange={(e) =>
                  setPriceRangeInput((prev) => ({
                    ...prev,
                    min: Number(e.target.value) || 0,
                  }))
                }
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRangeInput.max}
                onChange={(e) =>
                  setPriceRangeInput((prev) => ({
                    ...prev,
                    max: Number(e.target.value) || 99999,
                  }))
                }
              />
              <button
                className="price-search-btn"
                onClick={() => setPriceRange(priceRangeInput)}
              >
                <SearchOutlined />
              </button>
            </div>
          </div>

          <div className="filter-section">
            <h4>Rənglər</h4>
            <ul className="color-options">
              {[
                "white",
                "black",
                "purple",
                "green",
                "blue",
                "yellow",
                "red",
                "indigo",
                "violet",
                "orange",
                "gray",
              ].map((color) => (
                <li key={color}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(color)}
                      onChange={() => handleColorFilter(color)}
                    />
                    <span style={{ marginLeft: "6px" }}>{color}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-section">
            <h4>Sırala</h4>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Seçin</option>
              <option value="low-to-high">Ən ucuzdan</option>
              <option value="high-to-low">Ən bahalıdan</option>
            </select>
          </div>

          <div className="filter-section">
            <h4>Limit</h4>
            <select
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
            >
              <option value={0}>Hamısı</option>
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={12}>12</option>
            </select>
          </div>

          <p className="product-count">{filteredProducts.length} məhsul</p>
        </aside>

        <section className="brand-product-grid">
          {loading ? (
            <p className="loading-text">Yüklənir...</p>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => navigate(`/product/${product.id}`)}
                style={{ cursor: "pointer" }}
              >
                <div className="image-wrapper">
                  <img
                    src={product?.images?.[0] || ""}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price} AZN</p>
              </div>
            ))
          ) : (
            <p className="no-products">Bu brendə aid məhsul tapılmadı.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default BrandProductsPage;
