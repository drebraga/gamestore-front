import styled from "styled-components"

export const HeaderContainer = styled.header`
    box-sizing: border-box;
    background-color: #323232;
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoStyle = styled.img`
    margin-top: 30px;
    width: 60px;
`;

export const TitleContainer = styled.div`
    width: 60px;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #DA00FF;
`;

export const Title1 = styled.h1`
    text-align: start;
`;

export const Title2 = styled.h1`
    text-align: end;
    font-weight: 700;
`;

export const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #DA00FF;
    margin-left: 5px;
    position: relative;
    p {
        font-size: 11px;
        color: #000000;
        background-color: #DA00FF;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #000000;
        margin-left: 5px;
        position: absolute;
        top: -5px;
        right: -5px;
    }    
`;