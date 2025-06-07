import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Context yaradılır
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]); // <--- boş array ilə başlanır
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    setFavorites((prev) =>
      prev.find((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://ecommerce.ibradev.me/categories/all");
        setCategories(response.data || []);
      } catch (error) {
        console.error("Kateqoriyalar yüklənərkən xəta baş verdi:", error);
        setCategories([]); // xəta olsa belə boş array təyin olunur
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <DataContext.Provider value={{ categories, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
