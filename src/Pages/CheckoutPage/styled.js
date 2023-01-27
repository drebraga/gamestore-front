import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  font-family: "Inter", sans-serif;
  background-color: #242424;
  @media (max-width: 834px) {
    justify-content: center;
  }
`;

export const RightContent = styled.div`
  width: 40%;
  height: 100vh;
  position: relative;

  @media (max-width: 834px) {
    display: none;
  }
`;

export const LeftContent = styled.div`
  width: 60%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 834px) {
    justify-content: center;
  }
`;

export const MainTitle = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  /* margin-bottom: 114px; */
  h1 {
    font-size: 30px;
    font-weight: 600;
    color: #fff;
  }
  div {
    width: 8px;
    height: 100%;
    margin-right: 10px;
    background-color: #a100ed;
  }
  @media (max-width: 400px) {
    padding: 0;
    margin-bottom: 20px;
    h1 {
      font-size: 25px;
    }
  }
`;
export const MainText = styled.div`
  height: auto;
  width: 100%;
  text-align: center;
  height: auto;
  padding: 0 10%;
  height: auto;
  font-size: 30px;
  font-weight: 400;
  line-height: 36.31px;
  color: #fff;
  /* margin-bottom: 264px; */

  span {
    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
    color: #da00fe;
  }
  @media (max-width: 834px) {
    padding: 0 2%;
    margin-bottom: 20px;
  }
  @media (max-width: 400px) {
    padding: 0;
    margin-bottom: 20px;
    font-size: 25px;
  }
`;

export const StyledButton = styled(Link)`
  height: 70px;
  width: 350px;
  border-radius: 8px;
  background-color: #a100ed;
  color: #fff;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;


  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Logo = styled.div`
  display: flex;
  inset: 20px;
  z-index: 3;
  position: fixed;
  color: #da00ff;
  img {
    width: 52px;
    height: 58px;
  }
  section {
    margin-left: 10px;
    h2 {
      font-weight: 800;
    }
    h3 {
      font-weight: 700;
      margin-left: 14px;
    }
  }
  @media (max-width: 428px) {
    section {
      display: none;
    }
  }
`;

export const RightLogo = styled.div`
  height: 237px;
  width: 233px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const HiddenLogo = styled.div`
  width: 200px;
  display: none;

  img{
    width: 100%;
  }

  @media (max-width: 834px) {
    display: block;
    margin-top: 20px;
  }
`;
