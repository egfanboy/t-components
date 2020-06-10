import styled from 'styled-components';
import Icon from '../icon';
import Color from '../utils/colors';

export const StyledIconButton = styled(Icon)`
    border-radius: 50%;
    padding: 0.25rem;

    user-select: none;
    &:hover {
        color: ${({ theme }) => theme.primary};
        cursor: pointer;
        background-color: ${({ theme }) =>
            Color.changeOpacity(theme.primary, 0.3)};
    }
`;
