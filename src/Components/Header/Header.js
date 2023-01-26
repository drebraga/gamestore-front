import {
    HeaderContainer, LogoContainer, LogoStyle,
    TitleContainer, Title1, Title2, MenuContainer
} from "./styled"
import Logo from "../../assets/images/logo.svg"
import { House, ShoppingCartSimple, SignIn, UserCircle } from "phosphor-react";
import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate()
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
                <House size={24} onClick={() => navigate("/")} />
                <UserCircle size={24} onClick={() => navigate("/login")} />
                <ShoppingCartSimple size={24} onClick={() => navigate("/carrinho")} />
                <SignIn size={24} onClick={() => navigate("/")} />
            </MenuContainer>
        </HeaderContainer>
    )
}

export default Header;