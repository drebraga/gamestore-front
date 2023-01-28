import { useState } from "react";
import Loading from "../../Components/Loading/Loading";
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

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <MainPage>
          <LeftContent>
            <Logo>
              <img src={logo} />
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
              <img src={image}></img>
            </HiddenLogo>
            <MainText>
              Nós da equipe <span>GAME STORE</span> agradecemos a sua confiança
              na qualidade de nossos serviços, volte sempre :)
            </MainText>
            <NavButton onClick={()=>{
              console.log("cliquei")
            }} to="/">Continuar Comprando</NavButton>
          </LeftContent>
          <RightContent>
            <RightLogo>
              <img src={image} />
            </RightLogo>
          </RightContent>
        </MainPage>
      )}
    </>
  );
}
