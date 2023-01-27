import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Styles/Reset"
import HomePage from "./Pages/HomePage/HomePage.js";
import LoginPage from "./Pages/LoginPage.js/LoginPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/cadastro" element={<SignUpPage/>} />
        <Route path="/carrinho" element={<CartPage />} />
        {/* <Route path="/:compra?" element={"Pagina Final"} /> */}
        <Route path="*" element={"Erro, caminho errado"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
