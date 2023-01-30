import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Square, TrashSimple, CheckSquareOffset } from "phosphor-react";
import { ThreeDots } from "react-loader-spinner";

import { api } from "../../Services/api.js";

import Context from "../../Context/Context.js";

import useWindowDimensions from "../../hooks/useWindowDimensions.js";

import { ListedItem } from "../../Components/ListedItem/ListedItem.js";
import { ProductCard } from "../../Components/ProductCart/ProductCart.js";
import Header from "../../Components/Header/Header.js";
import Alert from "../../Components/Alert/Alert.js";
import Loading from "../../Components/Loading/Loading.js";

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
} from "./styled.js";

export default function CartPage() {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);

  const { width } = useWindowDimensions();

  const { token } = useContext(Context);

  const [alertCall, setAlertCall] = useState({
    status: false,
    message: "",
  });

  const headerToken = {
    headers: {
      Authorization: `Bearer ${token?.token}`,
    },
  };

  const navigate = useNavigate();

  function handleSelectAllItems() {
    if (isAllSelected) {
      setIsAllSelected(false);
      setTotalPrice(0);
      setSelectedProducts([]);
    } else if (products.length > 0) {
      setIsAllSelected(true);

      let total = products.map((i) => i.price).reduce((a, b) => a + b);

      setSelectedProducts(products);
      setTotalPrice(total);
    }
  }

  async function handleDeleteAllItems(finalConfirmation) {
    if (finalConfirmation === false) {
      if (window.confirm("Você tem certeza que deseja limpar o seu carrinho?")) {
        try {
          await api.delete("/clean-cart", {
            headers: {
              Authorization: `Bearer ${token?.token}`,
            },
          });
        } catch (error) {
          console.log(error);
        }
        setProducts([]);
        setSelectedProducts([]);
        setTotalPrice(0);
        setIsAllSelected(false);
      }
    } else {
      try {
        await api.delete("/clean-cart", {
          headers: {
            Authorization: `Bearer ${token?.token}`,
          },
        });
      } catch (error) {
        console.log(error);
      }
      setProducts([]);
      setSelectedProducts([]);
      setTotalPrice(0);
      setIsAllSelected(false);
    }

  }

  function callAlert(message) {
    setAlertCall({ ...alertCall, message: message, status: true });
    setTimeout(setAlertCall, 5000, { status: false });
  }

  async function handlePurchaseConfirmation() {
    if (selectedProducts.length === 0) {
      callAlert("Você precisa selecionar ao menos um item.");
      return;
    }

    setButtonLoading(true);

    try {
      await api.post("checkout", { updatedCart: [...selectedProducts] }, {
        headers: {
          Authorization: `Bearer ${token?.token}`,
        }
      });

      const finalConfirmation = true;
      handleDeleteAllItems(finalConfirmation);
      navigate("/checkout");
    } catch (error) {
      console.log(error);
      setButtonLoading(false);
    }
  }

  async function getCartItems() {
    setContentLoading(true);
    try {
      const items = await api.get("/cart", headerToken);
      setProducts(items.data);
      setContentLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (selectedProducts.length === products.length && products.length > 0) {
      setIsAllSelected(true);
    } else if (selectedProducts.length === 0) {
      setIsAllSelected(false);
    } else {
      setIsAllSelected(false);
    }
  }, [selectedProducts, products]);

  useEffect(() => {
    if (selectedProducts.length > 0) {
      let total = selectedProducts
        .map((i) => i.price * i.qty)
        .reduce((a, b) => a + b);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [selectedProducts]);

  useEffect(() => {
    getCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />
      {alertCall.status ? <Alert alertCall={alertCall} setAlertCall={setAlertCall} /> : <></>}
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
              <TrashSimple
                color="#8A8A8A"
                size={33}
                weight="bold"
                onClick={() => handleDeleteAllItems(true)}
              />
            </SelectAll>

            {
              contentLoading &&              
                <Loading />              
            }

            {products.map((product) => (
              <ProductCard
                key={product._id}
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
                        gameName={product.name}
                        gameQuantity={product.qty}
                        gamePrice={product.price * product.qty}
                      />
                    ))}
                  </SIList>
                </SelectedItemsContainer>
              </RightList>

              <ButtonContainer onClick={handlePurchaseConfirmation}>
                {buttonLoading ? (
                  <ThreeDots width={40} height={30} color="#FFFFFF" />
                ) : (
                  <ButtonText>Confirmar Compra</ButtonText>
                )}
              </ButtonContainer>
            </RightContent>
          )}
        </InnerContainer>

        {width < 1024 && (
          <Footer>
            <ButtonContainer
              width={width < 768 ? width : 464}
              onClick={handlePurchaseConfirmation}
            >
              {buttonLoading ? (
                  <ThreeDots width={40} height={30} color="#FFFFFF" />
                ) : (
                  <ButtonText>Confirmar Compra</ButtonText>
                )}
            </ButtonContainer>
            {width > 768 && (
              <RCValue>
                <span>{"\u007B"}</span>R${" "}
                {totalPrice.toFixed(2).toString().replace(".", ",")}
                <span>{"\u007D"}</span>
              </RCValue>
            )}
          </Footer>
        )}
      </ContentContainer>
    </Container>
  );
}
