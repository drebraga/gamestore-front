import { HeaderContainer, LogoContainer, LogoStyle, TitleContainer, Title1, Title2, MenuContainer } from "./styled"
import Logo from "../../MOCKassets/CAT.svg"
import { House, ShoppingCartSimple, SignIn, UserCircle } from "phosphor-react";

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <LogoStyle src={Logo} alt="Logo" />
                <TitleContainer>
                    <Title1>GAME</Title1>
                    <Title2>STORE</Title2>
                </TitleContainer>
            </LogoContainer>
            <MenuContainer>
                <House size={24} />
                <UserCircle size={24} />
                <ShoppingCartSimple size={24} />
                <SignIn size={24} />
            </MenuContainer>
        </HeaderContainer>
    )
}

export default Header;