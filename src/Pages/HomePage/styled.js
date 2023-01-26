import styled from "styled-components";

export const HomeContainer = styled.div`
    box-sizing: border-box;
    background-color: #242424;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px 4% 4% 4%;
`;

export const Title = styled.h2`
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin: 1%;
    width: 100%;
`;

export const Search = styled.form`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 40px;
    background: #8A8A8A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 0 1%;
`;

export const Load = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 40px;
    background: #8A8A8A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;

export const SearchInput = styled.input`
    :focus{
        outline: none;
        background-color: #999999;
    }
    width: 90%;
    height: 30px;
    border: none;
    background: none;
    border-radius: 10px;
    padding: 3%;
    ::placeholder {
        color: black;
    }
`;

export const GameList = styled.ul`
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
    margin: 2% 1%;
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