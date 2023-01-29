import { BackButton, ErrorContainer } from "./styled"


export default function ErrorPage(){
    return (
        <ErrorContainer>
           Error 404 <br />Page Not Found
           <BackButton to="/">Back to Home</BackButton>
        </ErrorContainer>
    )
}