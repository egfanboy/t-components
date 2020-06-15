import React from 'react';

import theme from '../utils/theme';
import { StyledCircle } from './spinner.styled';

export const Spinner = ({ height = 100, className, color }) => {
    return (
        <svg className={className} viewBox="0 0 82 82" height={`${height}px`}>
            <StyledCircle
                theme={theme}
                color={color}
                fill="none"
                cx="41"
                cy="41"
                r="33"
            />
        </svg>
    );
};
