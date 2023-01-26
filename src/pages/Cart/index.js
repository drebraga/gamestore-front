import { Square, TrashSimple } from "phosphor-react";

import useWindowDimensions from "../../hooks/useWindowDimensions.js";

import { ListedItem } from "../../components/ListedItem/index.js";
import { ProductCard } from "../../components/ProductCart/index.js";
import { MainButton } from "../../components/MainButton/index.js";

import {
  Container,
  Title,
  ContentContainer,
  LeftContent,
  InnerContainer,
  SelectAll,
  SelectAllInnerContainer,
  Text,
  RightContent,
  RightList,
  RCHeader,
  RCTitle,
  RCValue,
  SelectedItemsContainer,
  SITitle,
  SIList,
  Footer,
  FooterInnerContainer,
} from "./styles.js";

export function Cart() {
  const { height, width } = useWindowDimensions();

  return (
    <Container>
      <ContentContainer>
        <Title>Carrinho</Title>
        <InnerContainer>
          <LeftContent>
            <SelectAll isAllSelected={false}>
              <SelectAllInnerContainer>
                <Square color="#8A8A8A" size={33} weight="bold" />
                <Text>Selecionar todos os itens do carrinho</Text>
              </SelectAllInnerContainer>
              <TrashSimple color="#8A8A8A" size={33} weight="bold" />
            </SelectAll>

            <ProductCard
              isSelected={false}
              title={"Grand Theft Auto V"}
              type={"Ação/Aventura"}
              image={
                "https://s2.glbimg.com/pVUTlvwHrlm44bi3yyYTOElUzw8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/1/9/8cOmg9TkaB2PgkS1sUjQ/2013-04-02-gta5-capa-rockstar-.jpg"
              }
              value={40.0}
            />

            <ProductCard
              isSelected={false}
              title={"Grand Theft Auto V"}
              type={"Ação/Aventura"}
              image={
                "https://s2.glbimg.com/pVUTlvwHrlm44bi3yyYTOElUzw8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/1/9/8cOmg9TkaB2PgkS1sUjQ/2013-04-02-gta5-capa-rockstar-.jpg"
              }
              value={40.0}
            />

            <ProductCard
              isSelected={false}
              title={"Grand Theft Auto V"}
              type={"Ação/Aventura"}
              image={
                "https://s2.glbimg.com/pVUTlvwHrlm44bi3yyYTOElUzw8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/1/9/8cOmg9TkaB2PgkS1sUjQ/2013-04-02-gta5-capa-rockstar-.jpg"
              }
              value={40.0}
            />
          </LeftContent>

          {width > 1023 && (
            <RightContent>
              <RightList>
                <RCHeader>
                  <RCTitle>Valor Total</RCTitle>
                  <RCValue>
                    <span>{"\u007B"}</span>R$ 00,00<span>{"\u007D"}</span>
                  </RCValue>
                </RCHeader>

                <SelectedItemsContainer>
                  <SITitle>Itens selecionados:</SITitle>

                  <SIList>
                    <ListedItem
                      gameName={"Grand Theft Auto"}
                      gameQuantity={1}
                      gamePrice={40}
                    />
                    <ListedItem
                      gameName={"Grand Theft Auto"}
                      gameQuantity={1}
                      gamePrice={40}
                    />
                  </SIList>
                </SelectedItemsContainer>
              </RightList>

              <MainButton buttonText={"Confirmar Compra"} />
            </RightContent>
          )}
        </InnerContainer>

        {width < 1024 && (
          <Footer>
            <MainButton buttonText={"Confirmar Compra"} width={width <= 768? "100%" : ""}/>
            {width > 768 && (
              <RCValue>
                <span>{"\u007B"}</span>R$ 00,00<span>{"\u007D"}</span>
              </RCValue>
            )}
          </Footer>
        )}
      </ContentContainer>
    </Container>
  );
}
