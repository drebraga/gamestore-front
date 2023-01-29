import styled from "styled-components";
import background from "../../assets/images/background.svg";

export const HomeContainer = styled.div`
    box-sizing: border-box;
    background-color: #242424;
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 90px 4% 4% 4%;
    cursor: default;
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
    border-radius: 10px;
    padding: 0 1%;
    border: 1px solid #000000;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, 
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
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
    transition: .5s;
    ::placeholder {
        color: black;
    }
`;

export const GameList = styled.ul`
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const GameCard = styled.li`
    box-sizing: border-box;
    background-color: #323232;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;
    width: 220px;
    height: 400px;
    padding: 20px;
    margin: 2% 2%;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, 
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const GameTitle = styled.h3`
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    width: 95%;
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
    aspect-ratio: 0.7;
    object-fit: cover;
    background-color: #FFFFFF;
    border: 5px solid #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, 
    rgba(0, 0, 0, 0.5) 0px -12px 30px, 
    rgba(0, 0, 0, 0.5) 0px 4px 6px, 
    rgba(0, 0, 0, 0.5) 0px 12px 13px, 
    rgba(0, 0, 0, 0.5) 0px -3px 5px;
`;

export const AddCartDiv = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    :hover{
        color: #DA00FE;
    }
    :not(:hover){
        color: #FFFFFF;
    }
    p{
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: start;
        margin-left: 5%;
    }
    transition: .3s;
    cursor: pointer;
`;