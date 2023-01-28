import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  height: auto;

  input {
    width: 100%;
    height: 40px;
    border: 0;
    border-bottom: 2px solid #da00fe;
    background-color: transparent;
    margin-bottom: 60px;
    font-size: 24px;
    font-weight: 400;
    color: #8a8a8a;
    :focus {
      outline: none;
    }
  }

  button {
    width: 100%;
    height: 48px;
    background-color: #a100ed;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    border: none;
    margin-top: 30px;
    margin-bottom: 60px;
    cursor: pointer;
  }

  @media (max-width: 834px) {
    input {
      margin-bottom: 40px;
    }
    button {
      margin-top: 10px;
      margin-bottom: 30px;
    }
  }
`;
