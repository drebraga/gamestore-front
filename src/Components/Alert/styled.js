import styled from "styled-components";

export const AlertContainer = styled.div`
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const AlertBox = styled.div`
    z-index: 0;
    max-width: 360px;
    width: 100%;
    min-height: 90px;
    background-color: #000000;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 15px;
    opacity: 1;
    color: #FFFFFF;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-family: "Inter", sans-serif;
        font-size: 22px;
        margin-left: 10px;
    }
	-webkit-animation: slide-top 5s ease-out reverse both;
	        animation: slide-top 5s ease-out reverse both;

    @-webkit-keyframes slide-top {
    0% {
        -webkit-transform: translateY(-100px);
                transform: translateY(-100px);
    }
    25% {
        -webkit-transform: translateY(100px);
                transform: translateY(100px);
    }
    50% {
        -webkit-transform: translateY(100px);
                transform: translateY(100px);
    }
    75% {
        -webkit-transform: translateY(-50px);
                transform: translateY(-50px);
    }
    100% {
        -webkit-transform: translateY(-100px);
                transform: translateY(-100px);
    }
    }
    @keyframes slide-top {
    0% {
        -webkit-transform: translateY(-100px);
                transform: translateY(-100px);
    }
    25% {
        -webkit-transform: translateY(100px);
                transform: translateY(100px);
    }
    50% {
        -webkit-transform: translateY(100px);
                transform: translateY(100px);
    }
    75% {
        -webkit-transform: translateY(-50px);
                transform: translateY(-50px);
    }
    100% {
        -webkit-transform: translateY(-100px);
                transform: translateY(-100px);
    }
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    right: 5%;
    top: 5%;
`;