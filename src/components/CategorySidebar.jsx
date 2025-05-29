import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategorySidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://ecommerce.ibradev.me/categories/all")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <ul className="category-list" style={{ listStyle: 'none', padding: 0 }}>
      {categories.map(cat => (
        <li key={cat.id} style={{ marginBottom: '0.5rem' }}>
          <Link to={`/${cat.slug}`} style={{ textDecoration: 'none', color: '#333' }}>
            {cat.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategorySidebar;
