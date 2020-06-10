import styled, { css } from 'styled-components';

import Color from '../utils/colors';

const SIZES = {
    small: '100px',
    medium: '150px',
    large: '200px',
};

const getButtonCSS = props => {
    const { text, outline } = props;

    const color = getColor(props);

    if (outline) return outlinedStyle(color);
    if (text) return textButtonStyle(color);

    return normalStyle(color);
};

const getColor = ({ theme, type }) => {
    switch (type) {
        case 'error': {
            return theme.error;
        }
        case 'warning': {
            return theme.warning;
        }
        case 'success': {
            return theme.success;
        }
        default: {
            return theme.primary;
        }
    }
};

const textButtonStyle = color => css`
    outline: none;
    background-color: transparent;
    color: ${color};
    &:hover {
        background-color: ${Color.changeOpacity(color, 0.2)};
        cursor: pointer;
    }

    &:focus {
        background-color: ${Color.changeOpacity(color, 0.1)};
    }

    &:disabled {
        opacity: 0.4;

        &:hover {
            background-color: transparent;
            cursor: not-allowed;
        }
    }
`;

const outlinedStyle = color => css`
    border: solid 2px ${color};
    outline: none;
    background-color: transparent;
    color: ${color};
    &:hover {
        background-color: ${Color.changeOpacity(color, 0.2)};
        cursor: pointer;
    }
    &:focus {
        background-color: ${Color.changeOpacity(color, 0.1)};
    }

    &:disabled {
        border-color: ${Color.changeOpacity(color, 0.4)};
        opacity: 0.4;

        &:hover {
            background-color: transparent;
            cursor: not-allowed;
        }
    }
`;

const normalStyle = color => css`
    background-color: ${color};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
    color: white;

    &:hover {
        cursor: pointer;
        color: white;
        background-color: ${color.light};
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
    }
    &:focus {
        background-color: ${Color.changeOpacity(color, 0.8)};
        outline: none;
    }

    &:disabled {
        background-color: ${Color.changeOpacity(color, 0.4)};
        border: none;
        box-shadow: none;
        color: white;
        cursor: not-allowed;
    }
`;

export const ButtonContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    user-select: none;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 8px;
    height: 100%;
`;

export const Label = styled.label``;

export const StyledButton = styled.button`
    border-radius: 4px;
    height: 40px;
    margin: 5px;
    width: ${({ size }) => SIZES[size]};
    max-width: 225px;
    text-transform: uppercase;
    font-size: 14px;

    letter-spacing: 0.12em;
    border-color: transparent;
    transition: all 0.2s;

    ${Label} {
        &:hover {
            cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
        }
    }

    ${getButtonCSS};
`;
