import {
    HomeContainer, Title, GameList,
    GameCard, GameTitle, GameCategory,
    GamePrice, GameImage, AddCartDiv
} from "./styled";
import { PlusCircle } from "phosphor-react";
import MOCKGAMES from "../../mock/MOCKGAMES";

const HomePage = () => {
    return (
        <HomeContainer>
            <Title>Destaques</Title>
            <GameList>
                {MOCKGAMES.map(e =>
                    <GameCard>
                        <GameImage src={e.image} alt={e.name} />
                        <GameTitle>{e.name}</GameTitle>
                        <GameCategory>{e.category}</GameCategory>
                        <GamePrice>R$ {e.price}</GamePrice>
                        <AddCartDiv>
                            <PlusCircle />
                            <p>Adicionar ao carrinho</p>
                        </AddCartDiv>
                    </GameCard>)
                }
            </GameList>
        </HomeContainer>
    );
}

export default HomePage;