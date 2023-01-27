import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Context/Context";
import GlobalStyle from "./Styles/Reset"
import HomePage from "./Pages/HomePage/HomePage.js";
import { useState } from "react";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Context.Provider value={{ token, setToken }} >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/carrinho" element={<CartPage />} />
          <Route path="/cadastro" element={<SignUpPage/>} />
          {/* <Route path="/:compra?" element={"Pagina Final"} /> */}
          <Route path="*" element={"Erro, caminho errado"} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;