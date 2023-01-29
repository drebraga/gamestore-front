import { Warning } from 'phosphor-react';
import { AlertContainer, AlertBox } from './styled';

const Alert = ({ alertCall }) => {
    const { message } = alertCall;

    return (
        <AlertContainer>
            <AlertBox>
                <Warning size={24} color={"#B90808"} />
                <p>{message}</p>
            </AlertBox>
        </AlertContainer>
    );
}

export default Alert;