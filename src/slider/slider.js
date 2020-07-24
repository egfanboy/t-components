import React from 'react';

import { StyledSlider } from './slider.styled';
import theme from '../utils/theme';

export function Slider(props) {
    const {
        value,
        onSelectionEnd,
        onChange,
        onSelectionStart,
        className,
    } = props;

    return (
        <StyledSlider
            type="range"
            className={className}
            theme={theme}
            value={value}
            onInput={e => onChange && onChange(e.target.value)}
            onMouseUp={() => onSelectionEnd && onSelectionEnd()}
            onMouseDown={() => onSelectionStart && onSelectionStart()}
        ></StyledSlider>
    );
}
