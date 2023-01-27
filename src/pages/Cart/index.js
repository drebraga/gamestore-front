import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Square, TrashSimple, CheckSquareOffset } from "phosphor-react";

import useWindowDimensions from "../../hooks/useWindowDimensions.js";

import { ListedItem } from "../../components/ListedItem/index.js";
import { ProductCard } from "../../components/ProductCart/index.js";
import Header from "../../Components/Header/Header.js";

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
  ButtonContainer,
  ButtonText,
} from "./styles.js";

const mock = [
  {
    id: 123,
    title: "Grand Theft Auto",
    type: "Ação/Aventura",
    image:
      "https://s2.glbimg.com/pVUTlvwHrlm44bi3yyYTOElUzw8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/1/9/8cOmg9TkaB2PgkS1sUjQ/2013-04-02-gta5-capa-rockstar-.jpg",
    value: 40,
    qty: 1
  },
  {
    id: 456,
    title: "Grand Theft Auto",
    type: "Ação/Aventura",
    image:
      "https://s2.glbimg.com/pVUTlvwHrlm44bi3yyYTOElUzw8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/1/9/8cOmg9TkaB2PgkS1sUjQ/2013-04-02-gta5-capa-rockstar-.jpg",
    value: 10,
    qty: 1
  },
  {
    id: 789,
    title: "Grand Theft Auto",
    type: "Ação/Aventura",
    image:
      "https://s2.glbimg.com/pVUTlvwHrlm44bi3yyYTOElUzw8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/1/9/8cOmg9TkaB2PgkS1sUjQ/2013-04-02-gta5-capa-rockstar-.jpg",
    value: 40,
    qty: 1
  },
];

export function Cart() {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([...mock]);
  const [selectedProducts, setSelectedProducts] = useState([]);  

  const { height, width } = useWindowDimensions();

  const navigate = useNavigate();

  function handleSelectAllItems() {
    if (isAllSelected) {
      setIsAllSelected(false);
      setTotalPrice(0);
      setSelectedProducts([]);
    } else if (products.length > 0){
      setIsAllSelected(true);

      let total = products.map((i) => i.value).reduce((a, b) => a + b);

      setSelectedProducts(products);
      setTotalPrice(total);
    }
  }

  function handleDeleteAllItems() {
    if(window.confirm("Você tem certeza que deseja limpar o seu carrinho?")) {
      setProducts([]);
      setSelectedProducts([]);
      setTotalPrice(0);
      setIsAllSelected(false);
    }
  }

  function handlePurchaseConfirmation() {
    if(selectedProducts.length === 0) {
      alert("Você precisa selecionar ao menos um item.");
      return;
    }

    navigate("/checkout");
  }

  useEffect(()=> {
    if(selectedProducts.length === products.length && products.length > 0) {
      setIsAllSelected(true);
    } else if(selectedProducts.length === 0) {
      setIsAllSelected(false)
    }
    else {
      setIsAllSelected(false);
    }
  }, [selectedProducts, products]);

  useEffect(()=> {
    if(selectedProducts.length > 0) {
      let total = selectedProducts.map((i) => i.value * i.qty).reduce((a, b) => a + b);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [selectedProducts])

  return (
    <Container height={height}>
      <Header />
      <ContentContainer>
        <Title>Carrinho</Title>
        <InnerContainer>
          <LeftContent>
            <SelectAll isAllSelected={isAllSelected}>
              <SelectAllInnerContainer onClick={handleSelectAllItems}>
                {isAllSelected ? (
                  <CheckSquareOffset color="#da00fe" size={33} weight="bold" />
                ) : (
                  <Square color="#8A8A8A" size={33} weight="bold" />
                )}

                <Text>Selecionar todos os itens do carrinho</Text>
              </SelectAllInnerContainer>
              <TrashSimple color="#8A8A8A" size={33} weight="bold" onClick={handleDeleteAllItems}/>
            </SelectAll>

            {products.map((product) => (
              <ProductCard
                key={product.id}
                isSelected={isAllSelected}
                product={product}
                products={products}
                setProducts={setProducts}
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
              />
            ))}

          </LeftContent>

          {width > 1023 && (
            <RightContent>
              <RightList>
                <RCHeader>
                  <RCTitle>Valor Total{"\u2800"}</RCTitle>
                  <RCValue>
                    <span>{"\u007B"}</span>R$
                    {totalPrice.toFixed(2).toString().replace(".", ",")}
                    <span>{"\u007D"}</span>
                  </RCValue>
                </RCHeader>

                <SelectedItemsContainer>
                  <SITitle>Itens selecionados:</SITitle>

                  <SIList>
                    {selectedProducts.map((product, index) => (
                      <ListedItem
                        key={index}
                        gameName={product.title}
                        gameQuantity={product.qty}
                        gamePrice={product.value * product.qty}
                      />
                    ))}
                  </SIList>
                </SelectedItemsContainer>
              </RightList>

              <ButtonContainer onClick={handlePurchaseConfirmation}>
                <ButtonText>Confirmar Compra</ButtonText>
              </ButtonContainer>
            </RightContent>
          )}
        </InnerContainer>

        {width < 1024 && (
          <Footer>
            <ButtonContainer width={width < 768 ? width : 464} onClick={handlePurchaseConfirmation}>
              <ButtonText>Confirmar Compra</ButtonText>
            </ButtonContainer>
            {width > 768 && (
              <RCValue>
                <span>{"\u007B"}</span>R$ {totalPrice.toFixed(2).toString().replace(".", ",")}<span>{"\u007D"}</span>
              </RCValue>
            )}
          </Footer>
        )}
      </ContentContainer>
    </Container>
  );
}
