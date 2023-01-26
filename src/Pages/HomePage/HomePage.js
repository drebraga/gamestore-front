import {
    HomeContainer, Title, GameList,
    GameCard, GameTitle, GameCategory,
    GamePrice, GameImage, AddCartDiv,
    Search, SearchInput
} from "./styled";
import { MagnifyingGlass, PlusCircle } from "phosphor-react";
import Header from "../../Components/Header/Header";
import MOCKGAMES from "../../mock/MOCKGAMES";

const HomePage = () => {
    return (
        <>
            <Header />
            <HomeContainer>
                <Search>
                    <MagnifyingGlass size={20} />
                    <SearchInput
                        name="search"
                        type="text"
                        placeholder="Pesquisar"
                    />
                </Search>
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
        </>
    );
}

export default HomePage;