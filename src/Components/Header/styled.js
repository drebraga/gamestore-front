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
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, 
    rgba(0, 0, 0, 0.09) 0px 4px 2px, 
    rgba(0, 0, 0, 0.09) 0px 8px 4px, 
    rgba(0, 0, 0, 0.09) 0px 16px 8px, 
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
    cursor: pointer;
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    p {
        margin-right: 5px;
        font-family: "Inter", sans-serif;
    }
    &:hover > :not(:hover) {
        opacity: .4;
    }
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
    cursor: pointer;
`;

export const Title1 = styled.h1`
    text-align: start;
    text-shadow: 2px 2px #000000;
`;

export const Title2 = styled.h1`
    text-align: end;
    font-weight: 700;
    text-shadow: 2px 2px #000000;
`;

export const MenuIcon = styled.div`
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #DA00FF;
    margin-left: 5px;
    position: relative;
    cursor: pointer;
    box-shadow: 2px 2px #000000;
    span {
        display: none;
    }
    &:hover {     
        span {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            background-color: #000000;
            border-radius: 10px;
            height: 40px;
            position: absolute;
            text-align: center;
            width: 70px;
            bottom: -40px;
            left: -10px;
        }
    }
`;

export const CartNumberP = styled.div`
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
`;