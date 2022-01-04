import styled from 'styled-components';
import colors from '../utils/colors';

export const Container = styled.div`
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 0.5rem;
`;

export const Tile = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 250px;
    border-radius: 6px;
    border: solid 1px
        ${({ theme }) => colors.changeOpacity(theme.grey.light, 0.3)};
    padding: 1rem;
    overflow: hidden;
    margin-bottom: 0.5rem;

    &:hover {
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.grey.dark};
    margin: 0;
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.grey.light};
    margin-top: auto;
    margin-bottom: 0;
`;
