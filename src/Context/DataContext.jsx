import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Context yaradılır
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [brands, setBrands] = useState([]);
  const toggleFavorite = (product) => {
    setFavorites((prev) =>
      prev.find((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, productsRes, brandsRes] = await Promise.all([
          axios.get("https://ecommerce.ibradev.me/categories/all"),
          axios.get("https://ecommerce.ibradev.me/products/all?limit=100"),
          axios.get("https://ecommerce.ibradev.me/brands/all"),
        ]);

        setCategories(categoriesRes.data || []);
        setProducts(productsRes.data?.data || []);
        setBrands(brandsRes.data || []);
      } catch (error) {
        setCategories([]);
        setProducts([]);
        setBrands([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <DataContext.Provider value={{ categories, products, brands, loading, favorites, toggleFavorite }}>

      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
