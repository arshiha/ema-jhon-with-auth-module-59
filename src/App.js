import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About.js";
import Header from "./components/Header/Header.js";
import Inventory from "./components/Inventory/Inventory.js";
import Login from "./components/Login/Login.js";
import Orders from "./components/Orders/Order.js";
import Shop from "./components/Shop/Shop.js";
import SignUp from "./components/SignUp/SignUp.js";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
