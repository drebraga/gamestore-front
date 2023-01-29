/* eslint-disable react-hooks/exhaustive-deps */
import {
    HomeContainer, Title, GameList,
    GameCard, GameTitle, GameCategory,
    GamePrice, GameImage, AddCartDiv,
    Search, SearchInput, Load
} from "./styled";
import { CheckCircle, MagnifyingGlass, PlusCircle } from "phosphor-react";
import Header from "../../Components/Header/Header";
import Loading from "../../Components/Loading/Loading";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import Context from "../../Context/Context";
import Alert from "../../Components/Alert/Alert";

const HomePage = () => {
    const [gameList, setGameList] = useState([]);
    const [gameCart, setGameCart] = useState([]);
    const [gameSearch, setGameSearch] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [resultSearch, setResultSearch] = useState(false);
    const [load, setLoad] = useState(false);
    const [update, setUpdate] = useState(false);
    const { token } = useContext(Context);
    const headerToken = {
        headers: {
            Authorization: `Bearer ${token?.token}`
        }
    };
    const [alertCall, setAlertCall] = useState({
        status: false,
        message: "",
    });

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/catalog`)
            .then((res) => {
                setGameList(res.data);
            })
            .catch((err) => {
                callAlert(err.response.data);
            })
    }, []);

    useEffect(() => {
        if (token?.token) {
            axios.get(`${process.env.REACT_APP_API_URL}/cart`, headerToken)
                .then((res) => {
                    setGameCart(res.data);
                })
                .catch((err) => {
                    callAlert(err.response.data);
                })
        }
    }, [update]);

    if (gameList === []) {
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
                setGameSearch(res.data);
            })
            .catch((err) => {
                callAlert(err.response.data);
            })
    }

    function addToCart(id) {
        const gameId = {
            gameId: id
        };
        if (!gameCart.some(item => item._id === id)) {
            axios.post(`${process.env.REACT_APP_API_URL}/cart/`, gameId, headerToken)
                .then((res) => {
                    setUpdate(!update);
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err.response.data);
                })
        } else {
            callAlert("O jogo já está no carrinho!");
        }

    }

    function callAlert(message) {
        setAlertCall({ ...alertCall, message: message, status: true });
        setTimeout(setAlertCall, 5000, { status: false });
    }

    return (
        <>
            <Header
                routeOrigin={"/"}
                cartNumber={gameCart.length}
            />
            {alertCall.status ? <Alert alertCall={alertCall} setAlertCall={setAlertCall} /> : <></>}
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
                        `Sua pesquisa "${searchInput}" retornou ${gameSearch.length} resultados` :
                        <></>
                    }
                </Title>
                <GameList>
                    {gameSearch?.map(e =>
                        <GameCard key={e._id}>
                            <GameImage src={e.image} alt={e.name} />
                            <GameTitle>{e.name}</GameTitle>
                            <GameCategory>{e.type}</GameCategory>
                            <GamePrice>R$ {e.price}</GamePrice>
                            <AddCartDiv
                                onClick={() => addToCart(e._id)}
                            >
                                {(gameCart.some(item => item._id === e._id)) ?
                                    <>
                                        <CheckCircle color={"#DA00FE"} />
                                    </>
                                    :
                                    <>
                                        <PlusCircle />
                                        <p>Adicionar ao carrinho</p>
                                    </>}
                            </AddCartDiv>
                        </GameCard>)
                    }
                </GameList>
                <Title>
                    Catálogo
                </Title>
                <GameList>
                    {gameList.map(e =>
                        <GameCard key={e._id}>
                            <GameImage src={e.image} alt={e.name} />
                            <GameTitle>{e.name}</GameTitle>
                            <GameCategory>{e.type}</GameCategory>
                            <GamePrice>R$ {e.price}</GamePrice>
                            <AddCartDiv onClick={() => addToCart(e._id)}>
                                {(gameCart.some(item => item._id === e._id)) ?
                                    <>
                                        <CheckCircle color={"#DA00FE"} />
                                    </>
                                    :
                                    <>
                                        <PlusCircle />
                                        <p>Adicionar ao carrinho</p>
                                    </>}
                            </AddCartDiv>
                        </GameCard>)
                    }
                </GameList>
            </HomeContainer>
        </>
    );
}

export default HomePage;