import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export default () => (
  <Carousel autoPlay showThumbs={false} showStatus={false}>
    <BoxContent>
      <img src="https://img.elo7.com.br/product/main/25CD9FE/big-poster-gamer-gta-5-lo002-tamanho-90x60-cm-poster-de-jogos.jpg" />
    </BoxContent>
    <BoxContent>
      <img src="https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7" />
    </BoxContent>
    <BoxContent>
      <img src="https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7" />
    </BoxContent>
    <BoxContent>
      <img src="https://cdn1.epicgames.com/offer/50118b7f954e450f8823df1614b24e80/EGS_FallGuys_Mediatonic_S1_2560x1440-187aa50ffaa014885d6702a0b632f848" />
    </BoxContent>
  </Carousel>);
;

const BoxContent = styled.div`
  width: 100%;
  height: 100%;
  img{
    height: 100vh;
    object-fit: cover;
  }
`;
