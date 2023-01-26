import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 205px;
  display: flex;
  padding: 15px;
  flex-direction: column;
  background-color: #323232;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid #da00fe;
`;

export const HeaderInnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Title = styled.h1`
  font-family: "Inter";
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
`;

export const Content = styled.div`
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
`;

export const ContentInnerContainer = styled.div`
  display: flex;
  gap: 60px;
`;

export const Image = styled.img`
  width: 100px;
  height: 115px;
  margin-left: 85px;

  @media (max-width: 550px) {
    margin-left: 0px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Type = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  color: #8a8a8a;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const Price = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  color: #da00fe;
`;

export const ButtonContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  gap: 5px;
`;

export const DecreaseButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #8a8a8a;
  border: none;
  border-radius: 1px;

  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`;

export const Quantity = styled.p`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8a8a8a;
  border-radius: 1px;

  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
`;

export const IncreaseButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #8a8a8a;
  border: none;
  border-radius: 1px;

  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`;
