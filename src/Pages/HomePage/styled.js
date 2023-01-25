import styled from "styled-components";

export const HomeContainer = styled.div`
    box-sizing: border-box;
    background-color: #242424;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 70px;
    padding-left: 50px;
`;

export const Title = styled.h2`
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
`;

export const GameList = styled.ul`
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
`;

export const GameCard = styled.li`
    box-sizing: border-box;
    background-color: #323232;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: #FFFFFF;
    width: 220px;
    height: 260px;
    padding: 10px;
    margin: 1%;
`;

export const GameTitle = styled.h3`
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
`;

export const GameCategory = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #8A8A8A;
`;

export const GamePrice = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #DA00FE;
`;

export const GameImage = styled.img`
    width: 60%;
    aspect-ratio: 1;
    object-fit: contain;
`;

export const AddCartDiv = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    p{
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #FFFFFF;
    }
`;