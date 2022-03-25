import "./styles.css";
import AppHeader from "./containers/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./containers/productList";
import ProductDetails from "./containers/productDetails";
import Product from "./containers/Product";
import "semantic-ui-css/semantic.min.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route
            exact
            path="/product/:productId"
            element={<ProductDetails />}
          />
          <Route>404 Not found</Route>
        </Routes>
      </Router>
    </div>
  );
}