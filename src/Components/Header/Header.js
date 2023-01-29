import {
    HeaderContainer, LogoContainer, LogoStyle,
    TitleContainer, Title1, Title2, MenuContainer,
    MenuIcon, CartNumberP
} from "./styled"
import Logo from "../../assets/images/logo.svg"
import { House, ShoppingCartSimple, SignIn, UserCircle } from "phosphor-react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import Context from "../../Context/Context";

const Header = ({ routeOrigin, cartNumber }) => {
    const navigate = useNavigate()
    const { token, setToken } = useContext(Context);

    function Logout() {
        navigate("/")
        setToken("");
        localStorage.removeItem("token");
    }

    return (
        <HeaderContainer>
            <LogoContainer>
                <LogoStyle
                    src={Logo}
                    alt="Logo"
                    onClick={() => navigate("/")}
                />
                <TitleContainer onClick={() => navigate("/")}>
                    <Title1>GAME</Title1>
                    <Title2>STORE</Title2>
                </TitleContainer>
            </LogoContainer>
            <MenuContainer>
                { token ? <p>Olá, {token.name}</p> : <></> }
                {
                    routeOrigin === "/" ? <></> :
                        <MenuIcon
                            onClick={() => navigate("/")}
                        >
                            <House size={24} />
                            <span>Home</span>
                        </MenuIcon>
                }
                {
                    routeOrigin === "/" ?
                        <>{
                            token ?
                                <>
                                    <MenuIcon
                                        onClick={() => navigate("/carrinho")}
                                    >
                                        <ShoppingCartSimple size={24} />
                                        {cartNumber > 0 ? <CartNumberP>{cartNumber}</CartNumberP> : <></>}
                                        <span>Meu<br />Carrinho</span>
                                    </MenuIcon>
                                    <MenuIcon
                                        onClick={() => Logout()}
                                    >
                                        <SignIn size={24} />
                                        <span>Sair</span>
                                    </MenuIcon>
                                </>
                                :
                                <MenuIcon
                                    onClick={() => navigate("/login")}
                                >
                                    <UserCircle size={24} />
                                    <span>Login</span>
                                </MenuIcon>
                        }</> :
                        <MenuIcon
                            onClick={() => navigate("/login")}
                        >
                            <UserCircle size={24} />
                            <span>Login</span>
                        </MenuIcon>
                }
            </MenuContainer >
        </HeaderContainer >
    )
}

export default Header;