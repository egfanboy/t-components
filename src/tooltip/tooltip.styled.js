import styled from 'styled-components';

export const Container = styled.span`
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px;
    border-radius: 6px;

    position: fixed;
    z-index: 1;

    transform: translate(-65px, -100%);
    &:after {
        content: '';
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 12px solid black;
        position: absolute;
        bottom: -8px;
        transform: rotate(180deg);
        right: 40%;
    }
`;
