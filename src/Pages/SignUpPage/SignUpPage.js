import { BoxLeft, BoxRight, HiddenLogo, Logo, Page, Title } from "./styled";
import logomarca from "../../assets/images/logo.svg";
import { useState } from "react";
import { StyledLink } from "./styled";
import { ThreeDots } from "react-loader-spinner";
import { StyledForm } from "../../Components/StyledForm/StyledForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Carousel from "../../Components/Carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function createAccount(e) {
    e.preventDefault();

    const URL = `${process.env.REACT_APP_API_URL}/sign-up`;

    axios
      .post(URL, form)
      .then((res) => {
        console.log(res.data);
        setIsLoading(true);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setIsLoading(false)
      });
  }

  return (
    <Page>
      <BoxLeft>
        <Logo>
          <img src={logomarca} alt="logo"/>
          <section>
            <h2>GAME</h2>
            <h3>STORE</h3>
          </section>
        </Logo>
        <Carousel />
      </BoxLeft>
      <BoxRight>
        <HiddenLogo>
          <img src={logomarca} alt="logo"/>
        </HiddenLogo>

        <Title>
          <div></div>
          <h1>Crie uma Conta</h1>
        </Title>

        <StyledForm onSubmit={createAccount}>
          <input
            name="name"
            value={form.name}
            onChange={handleForm}
            type="text"
            disabled={isLoading}
            placeholder="Nome"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleForm}
            type="text"
            disabled={isLoading}
            placeholder="E-mail"
            required
          />
          <input
            name="password"
            value={form.password}
            onChange={handleForm}
            type="password"
            disabled={isLoading}
            placeholder="Senha"
            required
          />
          <input
            name="repeatPassword"
            value={form.repeatPassword}
            onChange={handleForm}
            type="password"
            disabled={isLoading}
            placeholder="Confirme a senha"
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <ThreeDots width={50} height={40} color="#FFFFFF" />
            ) : (
              "Criar Conta"
            )}
          </button>
        </StyledForm>

        <StyledLink to="/login">
          <h2>
            J?? possui uma conta? <span>Fa??a Login</span>
          </h2>
        </StyledLink>
      </BoxRight>
    </Page>
  );
}
