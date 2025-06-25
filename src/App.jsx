import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataProvider from "./Context/DataContext";
import AuthProvider from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishListContext";

import Home from "./pages/Home";
import Registration from "./pages/Registration";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import WishlistPage from "./pages/WishListPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Store from "./pages/Store"
import Footer from "./components/Footer";
import NewsletterSection from "./components/NewsletterSection";
import HomeSection from "./components/HomeSection";
import GiftCards from "./pages/GiftCards";
import Contact from "./pages/Contact";
import FAQ from "./pages/Faq";
import Loyalty from "./pages/Loyalty";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://ecommerce.ibradev.me/categories/all")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <Router>
      <AuthProvider>
        <DataProvider>
          <WishlistProvider>
            <CartProvider>
              <Navbar categories={categories} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/:slug" element={<CategoryPage />} />
                <Route path="/store" element={<Store />} />
                <Route path="/gift-cards" element={<GiftCards />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/loyalty" element={<Loyalty />} />
              </Routes>
              <HomeSection />
              <NewsletterSection />
              <Footer />
            </CartProvider>
          </WishlistProvider>
        </DataProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
