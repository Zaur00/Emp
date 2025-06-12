// Context/CategoriesContext.js
import React, { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Categories fetch error:", err));
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
