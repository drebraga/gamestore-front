import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Context/Context";
import GlobalStyle from "./Styles/Reset"
import SignUp from "./Pages/SignUpPage/SignUp";
import HomePage from "./Pages/HomePage/HomePage.js";
import { Cart } from "./Pages/Cart";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Context.Provider value={{ token, setToken }} >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={"Login"} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/cadastro" element={<SignUp />} />
          {/* <Route path="/:compra?" element={"Pagina Final"} /> */}
          <Route path="*" element={"Erro, caminho errado"} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;