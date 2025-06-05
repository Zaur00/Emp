// 📁 src/Context/DataContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ecommerce.ibradev.me/categories/all")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Kateqoriyalar yüklənərkən xəta:", err);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ categories, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
