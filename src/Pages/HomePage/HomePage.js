import {
    HomeContainer, Title, GameList,
    GameCard, GameTitle, GameCategory,
    GamePrice, GameImage, AddCartDiv,
    Search, SearchInput, Load
} from "./styled";
import { MagnifyingGlass, PlusCircle } from "phosphor-react";
import Header from "../../Components/Header/Header";
import Loading from "../../Components/Loading/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const HomePage = () => {
    const [gameList, setGameList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [resultSearch, setResultSearch] = useState(false);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/catalog`)
            .then((res) => {
                setGameList(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }, []);

    if (!gameList) {
        return (
            <Loading />
        );
    }


    function handleInput(e) {
        setSearchInput(e.target.value)
    }

    function search(e) {
        e.preventDefault();
        setLoad(true);
        axios.get(`${process.env.REACT_APP_API_URL}/catalog/${searchInput}`)
            .then((res) => {
                setLoad(false);
                setResultSearch(true);
                setGameList(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }

    return (
        <>
            <Header />
            <HomeContainer>
                {!load ?
                    <Search onSubmit={search}>
                        <MagnifyingGlass size={20} />
                        <SearchInput
                            name="search"
                            type="text"
                            placeholder="Pesquisar"
                            value={searchInput}
                            onChange={handleInput}
                            disabled={load}
                            required
                        />
                    </Search> :
                    <Load>
                        <ThreeDots width={40} height={30} color="#FFFFFF" />
                    </Load>
                }
                <Title>
                    {resultSearch ?
                        `O resultado da pesquisa para ${searchInput} é:` :
                        "Destaques"
                    }
                </Title>
                <GameList>
                    {gameList.map(e =>
                        <GameCard key={e._id}>
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