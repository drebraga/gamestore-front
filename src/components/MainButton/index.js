import {
    Container,
    Text,
} from "./styles.js";

export function MainButton({buttonText}) {
    return (
        <Container>
            <Text>{buttonText}</Text>
        </Container>
    )
}