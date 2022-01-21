import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// screens

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

//components
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            {/* <Route
              path="/product/:id"
              element={<ProductScreen />}
              // key={match.params.id}
              // location={match.params.id}
            /> */}
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
