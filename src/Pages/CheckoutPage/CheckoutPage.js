import { useContext} from "react";
import {
  HiddenLogo,
  LeftContent,
  Logo,
  MainPage,
  MainText,
  MainTitle,
  RightContent,
  RightLogo,
  NavButton,
} from "./styled";
import logo from "../../assets/images/logo.svg";
import image from "../../assets/images/image.svg";
import Context from "../../Context/Context";
import ErrorPage from "../../Components/Error404/ErrorPage";

export default function CheckoutPage() {
  const { token } = useContext(Context);

  if (token === null) {
    return < ErrorPage/>;
  }

  return (
    <>
      <MainPage>
        <LeftContent>
          <Logo>
            <img src={logo} alt="logo" />
            <section>
              <h2>GAME</h2>
              <h3>STORE</h3>
            </section>
          </Logo>
          <MainTitle>
            <div></div>
            <h1>Compra realizada com sucesso!</h1>
          </MainTitle>
          <HiddenLogo>
            <img src={image} alt="logo"></img>
          </HiddenLogo>
          <MainText>
            Nós da equipe <span>GAME STORE</span> agradecemos a sua confiança na
            qualidade de nossos serviços, volte sempre :)
          </MainText>
          <NavButton to="/">Continuar Comprando</NavButton>
        </LeftContent>
        <RightContent>
          <RightLogo>
            <img src={image} alt="logo" />
          </RightLogo>
        </RightContent>
      </MainPage>
    </>
  );
}
