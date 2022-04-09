import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.js";
import Login from "./components/Login/Login.js";
import Shop from "./components/Shop/Shop.js";
import SignUp from "./components/SignUp/SignUp.js";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
