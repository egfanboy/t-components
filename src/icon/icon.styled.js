import styled from 'styled-components';

const ICON_SIZES = {
    small: '14px',
    medium: '18px',
    large: '24px',
};

export const StyledIcon = styled.i`
    font-size: ${({ size }) => ICON_SIZES[size]};
`;
