import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0 20px;
  justify-content: center;
  background-color: #242424;
`;

export const Title = styled.h1`
  font-family: "Inter";
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.24em;
  margin: 40px 0;
  color: #ffffff;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;

  @media (max-width: 1024px) {
    gap: 10px;
  }
`;

export const LeftContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const RightContent = styled.div`
  width: 40%px;
`;

export const SelectAll = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 15px;
  background-color: #323232;
  margin-bottom: 40px;
`;

export const SelectAllInnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.p`
  font-family: "Inter";
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
`;

export const RightList = styled.div`
  width: 100%;
  height: 646px;
  border-radius: 8px;
  background-color: #323232;
  padding: 20px;
  margin-bottom: 40px;
`;

export const RCHeader = styled.div`
  display: flex;
  padding-bottom: 15px;
  justify-content: space-between;
  border-bottom: 1px solid #8a8a8a;

  span {
    color: #da00fe;
  }
`;

export const RCTitle = styled.h1`
  font-family: "Inter";
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0.165em;
  color: #ffffff;
`;

export const RCValue = styled.h1`
  font-family: "Inter";
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 0.165em;
  color: #ffffff;
`;

export const SelectedItemsContainer = styled.div``;

export const SITitle = styled.h1`
  font-family: "Inter";
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 0.165em;
  color: #ffffff;

  margin: 33px 0;
`;

export const SIList = styled.ul``;

export const Footer = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 20px;

  span {
    color: #da00fe;
  }
`;


