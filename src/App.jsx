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

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <WishlistProvider>
          <CartProvider>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/:slug" element={<CategoryPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/cart" element={<CartPage />} />

              </Routes>
            </Router>
          </CartProvider>
        </WishlistProvider>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
