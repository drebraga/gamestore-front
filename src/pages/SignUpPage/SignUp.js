import { Box, BoxForm, Logo, Page } from "./styled";
import logomarca from "../../assets/images/logo.svg";
import { useState } from "react";
import { StyledLink } from "./styled";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <Page>
      <Box>
        <Logo>
          <img src={logomarca} />
          <section>
            <h2>GAME</h2>
            <h3>STORE</h3>
          </section>
        </Logo>
      </Box>
      <BoxForm>
        <div>
          <h1>Crie uma conta</h1>

          <form>
            <input
              name="name"
              value={form.name}
              onChange={handleForm}
              type="text"
              placeholder="Nome"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleForm}
              type="text"
              placeholder="E-mail"
              required
            />
            <input
              name="image"
              value={form.image}
              onChange={handleForm}
              type="password"
              placeholder="Senha"
              required
            />
            <input
              name="password"
              value={form.password}
              onChange={handleForm}
              type="password"
              placeholder="Confirme a senha"
              required
            />
            <button type="submit">Criar Conta</button>
          </form>

          <StyledLink to="/login">
            <h2>Já possui uma conta? <span>Faça Login</span></h2>
          </StyledLink>
        </div>
      </BoxForm>
    </Page>
  );
}
