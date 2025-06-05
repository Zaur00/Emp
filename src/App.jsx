import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthContext";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import DataProvider from "./Context/DataContext";
function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/:slug" element={<CategoryPage />} />
          </Routes>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
