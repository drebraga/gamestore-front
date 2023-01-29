import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: Inter;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #242424;

  font-size: 40px;
  font-weight: 800;
  line-height: 36px;
  color: #a100ed;
  text-align: center;
`;
export const BackButton = styled(Link)`
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
  margin-top: 100px;
  cursor: pointer;
`;
