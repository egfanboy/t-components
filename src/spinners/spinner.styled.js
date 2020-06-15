import styled, { keyframes } from 'styled-components';

const spin = keyframes`
 {
    0% {
        stroke-dashoffset: 200;
    }
    50% {
        stroke-dashoffset: 35;
        transform: rotate(135deg);
    }
    100% {
        stroke-dashoffset: 200;
        transform: rotate(450deg);
    }
}`;

export const StyledCircle = styled.circle`
    stroke-dasharray: 200;
    stroke: ${({ theme, color }) => color || theme.primary};
    stroke-width: 6;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: ${spin} 1.4s linear infinite;
    will-change: animation;
`;
