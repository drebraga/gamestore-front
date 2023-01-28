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
import { useContext, useEffect, useState } from "react";
import logomarca from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import Carousel from "../../Components/Carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Context from "../../Context/Context";

export default function LoginPage() {
  const { token, setToken } = useContext(Context);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token.length === 36) {
      setIsLoading(true);
      axios.get(`${process.env.REACT_APP_API_URL}/sign-in`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => {
          setIsLoading(false);
          setToken(res.data);
          localStorage.setItem("token", JSON.stringify(res.data));
          navigate("/");
        })
        .catch((err) => {
          alert(err.response.data);
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function loginAccount(e) {
    e.preventDefault();

    const URL = `${process.env.REACT_APP_API_URL}/sign-in`;
    axios.post(URL, form)
      .then((res) => {
        setIsLoading(true);
        setToken(res.data.token);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
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
          <img src={logomarca} />
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
