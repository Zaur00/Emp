import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataProvider from "./Context/DataContext";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import AuthProvider from "./Context/AuthContext";
import WishlistPage from "./pages/WishListPage";
import { WishlistProvider } from "./Context/WishListContext";
function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <WishlistProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/:slug" element={<CategoryPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
            </Routes>
          </Router>
        </WishlistProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
