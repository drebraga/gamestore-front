import {
    HeaderContainer, LogoContainer, LogoStyle,
    TitleContainer, Title1, Title2, MenuContainer,
    MenuIcon
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
                {
                    routeOrigin === "/" ? <></> :
                        <MenuIcon><House size={24} onClick={() => navigate("/")} /></MenuIcon>
                }
                {
                    routeOrigin === "/" ?
                        <>{
                            token ?
                                <>
                                    <MenuIcon>
                                        <ShoppingCartSimple size={24} onClick={() => navigate("/carrinho")} />
                                        {cartNumber > 0 ? <p>{cartNumber}</p> : <></>}
                                    </MenuIcon>
                                    <MenuIcon><SignIn size={24} onClick={() => Logout()} /></MenuIcon>
                                </>
                                :
                                <MenuIcon><UserCircle size={24} onClick={() => navigate("/login")} /></MenuIcon>
                        }</> : <><MenuIcon><SignIn size={24} onClick={() => Logout()} /></MenuIcon></>
                }
            </MenuContainer >
        </HeaderContainer >
    )
}

export default Header;