import "./App.css";
import FirstPage from "./pages/FirstPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Layout from "./layout/Layout";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<FirstPage />} />

            <Route path="products" element={<Products />}/>
              <Route
                path="/product/productDetails/:product_id"
                element={<ProductDetails />}
              />
            

            <Route path="/login" element={<Login/>} />
             <Route path="/signup" element={<SignUp/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
