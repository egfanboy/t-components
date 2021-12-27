import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.5;
`;

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 101;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
`;

export const Modal = styled.div`
    z-index: 100;
    background: white;
    margin: 0;
    position: absolute;
    padding: 10px 20px;
    min-width: 300px;
    min-height: 150px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
`;

export const Body = styled.div`
    max-height: 70vh;
    overflow: scroll;
    height: 100%;
    margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: center;
`;
