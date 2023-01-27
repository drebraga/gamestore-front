import {
    Container,
    Title,
    Quantity,
    Price,
} from "./styled.js";

export function ListedItem({gameName, gameQuantity, gamePrice}) {
    return (
        <Container>
            <Title>{"\u2022"} {gameName}</Title>
            <Quantity>X{gameQuantity}</Quantity>
            <Price>R$ {gamePrice.toFixed(2).toString().replace(".", ",")}</Price>
        </Container>
    )
}