import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export default () => (
  <Carousel autoPlay showThumbs={false} showStatus={false}>
    <BoxContent>
      <img
        src="https://img.elo7.com.br/product/main/25CD9FE/big-poster-gamer-gta-5-lo002-tamanho-90x60-cm-poster-de-jogos.jpg"
        alt="banner gta v"
      />
    </BoxContent>
    <BoxContent>
      <img
        src="https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7"
        alt="banner god of war"
      />
    </BoxContent>
    <BoxContent>
      <img
        src="https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png"
        alt="banner red dead"
      />
    </BoxContent>
    <BoxContent>
      <img
        src="https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png"
        alt="banner last of us"
      />
    </BoxContent>
  </Carousel>
);
const BoxContent = styled.div`
  width: 100%;
  height: 100%;
  img {
    height: 100vh;
    object-fit: cover;
  }
`;
