import styled, { css } from 'styled-components';

// Default track colors
const defaultUnselectedColor = '#b3b3b3';
const defaultHighlightedColor = '#404040';

const getTrackColor = (
    {
        value,
        theme,
        highlightedTrackColor = defaultHighlightedColor,
        unselectedTrackColor = defaultUnselectedColor,
    },
    useTheme = false
) => {
    const selectedColor = useTheme ? theme.primary : highlightedTrackColor;

    return css`
        background: linear-gradient(
            to right,
            ${selectedColor} 0%,
            ${selectedColor} ${value}%,
            ${unselectedTrackColor} ${value}%,
            ${unselectedTrackColor} 100%
        );
    `;
};

const getThumbStyle = () => css`
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    cursor: pointer;
    margin-top: -4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
`;

const getTrackStyle = () => css`
    width: 100%;
    height: 4px;
    cursor: pointer;
    border-radius: 1.3px;

    ${getTrackColor}
`;

export const StyledSlider = styled.input.attrs()`
    appearance: none;
    width: 100%;
    background: transparent;

    &::-webkit-slider-thumb {
        appearance: none;
    }

    &::-moz-range-thumb {
        background-color: transparent;
        border-color: transparent;
    }

    &::-webkit-slider-runnable-track {
        ${getTrackStyle}
    }

    &::-moz-range-track {
        ${getTrackStyle}
    }

    &:hover::-webkit-slider-thumb {
        ${getThumbStyle}
    }

    &:hover::-moz-range-thumb {
        ${getThumbStyle}
    }

    &:focus {
        outline: none;
    }

    &:hover {
        &::-webkit-slider-runnable-track {
            ${props => getTrackColor(props, true)}
        }

        &::-moz-range-track {
            ${props => getTrackColor(props, true)}
        }
    }
`;
