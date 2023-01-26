import { StyledForm } from "../../Components/StyledForm";
import {
  BoxLeft,
  BoxRight,
  HiddenLogo,
  Logo,
  StyledLink,
  Title,
} from "../SignUpPage/styled";
import { PageLogin } from "./styled";
import { useState } from "react";
import logomarca from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import Carousel from "../../Components/Carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate;

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function loginAccount(e) {
    e.preventDefault();

    const URL = `${process.env.REACT_APP_API_URL}/sign-in`;

    axios
      .post(URL, form)
      .then((res) => {
        console.log(res.data);
        setIsLoading(true);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }
  return (
    <PageLogin>
      <BoxLeft>
        <Logo>
          <img src={logomarca} />
          <section>
            <h2>GAME</h2>
            <h3>STORE</h3>
          </section>
        </Logo>
        <Carousel />
      </BoxLeft>
      <BoxRight>
        <HiddenLogo>
          <img src={logomarca}/>
        </HiddenLogo>
        <Title>
          <div></div>
          <h1>Acesse sua Conta</h1>
        </Title>
        <StyledForm onSubmit={loginAccount}>
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
          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <ThreeDots width={50} height={40} color="#FFFFFF" />
            ) : (
              "Entrar"
            )}
          </button>
        </StyledForm>
        <StyledLink to="/cadastro">
          <h2>
            Ainda não possui uma conta? <span>Crie agora mesmo!</span>
          </h2>
        </StyledLink>
      </BoxRight>
    </PageLogin>
  );
}
