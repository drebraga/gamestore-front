import { useState } from "react";
import { Square, TrashSimple } from "phosphor-react";

import {
  Container,
  Header,
  Title,
  Content,
  ContentInnerContainer,
  Image,
  Type,
  Price,
  ButtonContainer,
  DecreaseButton,
  Quantity,
  IncreaseButton,
  HeaderInnerContainer,
  DescriptionContainer,
} from "./styles.js";

export function ProductCard({ isSelected, title, type, image, value }) {

  const [ quantity, setQuantity ] = useState(1)

  function handleDecrement() {
    if(quantity > 1) {
      setQuantity(prevCount => prevCount - 1);
    };    
  };

  function handleIncrement() {
    if(quantity < 10) {
      setQuantity(prevCount => prevCount + 1);
    };
  };

  return (
    <Container isSelected={isSelected}>
      <Header>
        <HeaderInnerContainer>
          <Square color="#8A8A8A" size={33} weight="bold" />
          <Title>{title}</Title>
        </HeaderInnerContainer>
        <TrashSimple color="#8A8A8A" size={33} weight="bold" />
      </Header>

      <Content>
        <ContentInnerContainer>
          <Image src={image} />
          <DescriptionContainer>
            <Type>{type}</Type>

            <Price>R$ {value.toFixed(2).toString().replace(".", ",")}</Price>
          </DescriptionContainer>
        </ContentInnerContainer>
        <ButtonContainer>
          <DecreaseButton onClick={handleDecrement}>-</DecreaseButton>
          <Quantity>{quantity}</Quantity>

          <IncreaseButton onClick={handleIncrement}>+</IncreaseButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
}
