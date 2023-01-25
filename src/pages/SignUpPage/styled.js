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
`;

export const Box = styled.aside`
  width: 45%;
  height: 100vh;
  background-color: gray;
  position: relative;
`;

export const Logo = styled.div`
  display: flex;
  inset: 20px;
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

export const BoxForm = styled.aside`
  width: 55%;
  height: 100vh;
  padding: 30px 15% 30px 50px;

  div {
    width: 100%;
    height: 100%;

    h1 {
      font-size: 34px;
      font-weight: 800;
      color: #fff;
      margin: 20px auto 60px;
    }

    form {
      width: 100%;
      height: auto;

      input {
        width: 100%;
        height: 40px;
        border: 0;
        outline: none;
        border-bottom: 2px solid #da00fe;
        background-color: transparent;
        margin-bottom: 60px;
        font-size: 24px;
        font-weight: 400;
        color: #8a8a8a;
      }

      button {
        width: 100%;
        height: 48px;
        background-color: #a100ed;
        border-radius: 8px;

        font-size: 20px;
        font-weight: 600;
        color: #fff;
        border: none;
        margin-bottom: 60px;
      }
    }
  }
`;

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    h2{
        font-size: 20px;
        font-weight: 500;
        color: #8A8A8A;

        span{
            color: #DA00fe;
        }
    }

`