import styled, { css } from 'styled-components';
import colors from '../utils/colors';

const borderStyles = css`
    border: solid 2px;
    border-color: ${({ theme }) => theme.primary};
    border-radius: 4px;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 4px;

    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
    ${({ expanded }) => expanded && borderStyles};
`;

export const Wrapper = styled.div`
    height: 20px;
    padding: 10px;

    &:hover {
        background-color: ${({ theme }) =>
            colors.changeOpacity(theme.primary, 0.1)};
        cursor: pointer;
        ${({ expanded }) => !expanded && borderStyles}
    }
`;

export const Title = styled.p`
    margin: 0;
    color: ${({ expanded, theme }) =>
        expanded ? theme.primary : 'rgba(117, 117, 117, 0.8)'};
`;

export const ExpandedContainer = styled.div`
    padding: 10px;

    box-sizing: border-box;
    border-collapse: separate;
    border-top: 1px solid
        ${({ theme }) => colors.changeOpacity(theme.primary, 0.8)};

    width: 100%;
`;
