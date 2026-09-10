import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./pages/Home";
import { Novedades } from "./pages/Novedades";
import { AdminPanel } from "./pages/AdminPanel";
import { ProductDetail } from "./pages/ProductDetail";
import Login from "./pages/Login";
import { NotFound } from "./pages/404error";
import { AuthProvider } from "./context/AuthProvider";
import { ProductProvider } from "./context/ProductProvider";
import { CurrencyProvider } from "./context/CurrencyProvider";

// acá en teoría ya estan todos los imports, no se olviden que esto es SPA (una sola pagina).

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CurrencyProvider>
          <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories/novedades" element={<Novedades />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/categories/ofertas" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </BrowserRouter>
        </CurrencyProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
