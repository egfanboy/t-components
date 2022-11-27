import styled from 'styled-components';

import Color from '../utils/colors';

export const Container = styled.span`
    width: 120px;
    background-color: ${({ theme }) => Color.changeOpacity(theme.grey, 0.4)};

    text-align: center;
    padding: 5px;
    border-radius: 6px;
    position: fixed;
    z-index: 1;

    transform: translate(-65px, -100%);
`;
