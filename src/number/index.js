import React from 'react';

import { PropTypes } from 'prop-types';

import Input from '../input';

function NumberInput({
    onChange,
    value,
    min,
    max,
    error,
    onBlur,
    onFocus,
    label,
    icon,
}) {
    return (
        <Input
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            label={label}
            value={value}
            min={min}
            max={max}
            icon={icon}
            error={error}
        />
    );
}

NumberInput.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    label: PropTypes.string,
    icon: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default NumberInput;
