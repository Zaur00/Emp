import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [catRes, brandRes] = await Promise.all([
          axios.get("https://ecommerce.ibradev.me/categories/all"),
          axios.get("https://ecommerce.ibradev.me/brands/all"),
          axios.get("https://ecommerce.ibradev.me/products/all")
        ]);
        setCategories(catRes.data);
        setBrands(brandRes.data);
      } catch (error) {
        console.error("Filter data error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFilters();
  }, []);

  return (
    <DataContext.Provider value={{ categories, brands, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
