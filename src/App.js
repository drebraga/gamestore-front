import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Styles/Reset"
import SignUp from "./Pages/SignUpPage/SignUp";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/login" element={"Login"} />
        <Route path="/cadastro" element={<SignUp/>} />
        <Route path="/carrinho" element={"Carrinho"} />
        {/* <Route path="/:compra?" element={"Pagina Final"} /> */}
        <Route path="*" element={"Erro, caminho errado"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
