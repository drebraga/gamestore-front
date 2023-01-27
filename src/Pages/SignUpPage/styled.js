import { Link } from "react-router-dom";
import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  background-color: #242424;

  @media (max-width: 834px) {
    flex-direction: column;
  }
`;

export const BoxLeft = styled.aside`
  width: 45%;
  height: 100vh;
  background-color: gray;
  position: relative;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  overflow: hidden;

  @media (max-width: 834px) {
    display: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  inset: 30px;
  z-index: 3;
  position: absolute;
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
`;

export const HiddenLogo = styled.div`
  width: 100%;
  display: none;
  margin-bottom: 20px;
  img{
    width: 84px;
  }
  @media (max-width: 834px) {
    display: flex;
    justify-content: center;
  }
`

export const BoxRight = styled.aside`
  width: 55%;
  height: 100vh;
  padding: 30px 18% 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 834px) {
    width: 100%;
    padding: 20px 15%;
  }
`;

export const Title = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin: 20px 0 40px;
  text-align: center;

  h1 {
    font-size: 34px;
    font-weight: 800;
    color: #fff;
  }

  div {
    width: 8px;
    height: 40px;
    background-color: #a100ed;
    margin-right: 10px;
    border-radius: 8px;
  }

  @media (max-width: 834px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  h2 {
    font-size: 20px;
    font-weight: 500;
    color: #8a8a8a;

    span {
      color: #da00fe;
    }
  }
`;
