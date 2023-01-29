import { useContext, useState } from "react";
import { CheckSquareOffset, Square, TrashSimple } from "phosphor-react";

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
} from "./styled.js";
import { api } from "../../Services/api.js";
import Context from "../../Context/Context.js";

export function ProductCard({
  isSelected,
  products,
  setProducts,
  product,
  selectedProducts,
  setSelectedProducts,
}) {
  const [select, setSelect] = useState(false);

  const { token } = useContext(Context);

  function handleDecrement(product) {
    if (product.qty > 1) {
      let index = products.indexOf(product);
      let arr = [...products];
      arr[index].qty -= 1;

      setProducts(arr);
    }
  }

  function handleIncrement() {
    if (product.qty < 10) {
      let index = products.indexOf(product);
      let arr = [...products];
      arr[index].qty += 1;

      setProducts(arr);
    }
  }

  function handleSelect(product) {
    let index = selectedProducts.indexOf(product);

    if (index === -1) {
      let arr = [...selectedProducts, product];
      setSelectedProducts(arr);
      setSelect(true);
    } else {
      let arr = [...selectedProducts];
      arr.splice(index, 1);
      setSelectedProducts(arr);
      setSelect(false);
    }
  }

  function handleDelete(product) {
    let index = products.indexOf(product);
    let arr = [...products];
    arr.splice(index, 1);
    setProducts(arr);

    let indexSelected = selectedProducts.indexOf(product);
    if (indexSelected !== -1) {
      let arr = [...selectedProducts];
      arr.splice(indexSelected, 1);
      setSelectedProducts(arr);
    }

    updateCart(arr);
  }

  async function updateCart(arr) {   

    try {
      await api.put("update-cart", {updatedCart:[...arr]}, {
        headers: {
          Authorization: `Bearer ${token}`,
        }});

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container isSelected={isSelected || select}>
      <Header>
        <HeaderInnerContainer onClick={() => handleSelect(product)}>
          {isSelected || select ? (
            <CheckSquareOffset color="#da00fe" size={33} weight="bold" />
          ) : (
            <Square color="#8A8A8A" size={33} weight="bold" />
          )}

          <Title>{product.name}</Title>
        </HeaderInnerContainer>
        <TrashSimple
          color="#8A8A8A"
          size={33}
          weight="bold"
          onClick={() => handleDelete(product)}
        />
      </Header>

      <Content>
        <ContentInnerContainer>
          <Image src={product.image} />
          <DescriptionContainer>
            <Type>{product.type}</Type>

            <Price>
              R$ {product.price.toFixed(2).toString().replace(".", ",")}
            </Price>
          </DescriptionContainer>
        </ContentInnerContainer>
        <ButtonContainer>
          <DecreaseButton
            onClick={() => handleDecrement(product)}
            disabled={isSelected || select}
          >
            -
          </DecreaseButton>
          <Quantity>{product.qty}</Quantity>

          <IncreaseButton
            onClick={() => handleIncrement(product)}
            disabled={isSelected || select}
          >
            +
          </IncreaseButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
}
