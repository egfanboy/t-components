import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { mergeTheme } from '../utils/theme/merge-theme';
import { ThemePropType } from '../utils/theme/prop-type';

import { StyledSlider } from './slider.styled';

export function Slider(props) {
    const {
        value,
        onSelectionEnd,
        onChange,
        onSelectionStart,
        className,
        theme,
        trackColors,
    } = props;

    const [sliderTheme, setSliderTheme] = useState(mergeTheme(theme));

    useEffect(() => setSliderTheme(mergeTheme(theme)), [theme]);

    return (
        <StyledSlider
            type="range"
            className={className}
            highlightedTrackColor={(trackColors || {}).selected}
            unselectedTrackColor={(trackColors || {}).unselected}
            theme={sliderTheme}
            value={value}
            onChange={e => onChange && onChange(e.target.value)}
            onMouseUp={() => onSelectionEnd && onSelectionEnd()}
            onMouseDown={() => onSelectionStart && onSelectionStart()}
            step="any"
        ></StyledSlider>
    );
}

Slider.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onSelectedEnd: PropTypes.func,
    onSelectedStart: PropTypes.func,
    theme: ThemePropType,
    trackColors: PropTypes.shape({
        selected: PropTypes.string,
        unselected: PropTypes.string,
    }),
    className: PropTypes.string,
};
