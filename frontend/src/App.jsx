import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./pages/cartpage/CartPage";
import Login from "./components/login/Login";
import HomePage from "./pages/homepage/HomePage";
import { CartProvider} from "./CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<HomePage/>} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>

  );
}

export default App;
