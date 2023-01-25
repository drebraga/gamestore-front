import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Styles/Reset"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/login" element={"Login"} />
        <Route path="/cadastro" element={"Cadastro"} />
        <Route path="/carrinho" element={"Carrinho"} />
        {/* <Route path="/:compra?" element={"Pagina Final"} /> */}
        <Route path="*" element={"Erro, caminho errado"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
