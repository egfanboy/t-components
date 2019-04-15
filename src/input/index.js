import React, { useState, useRef } from 'react';

import PropTypes from 'prop-types';

import theme from '../utils/theme';

import onOutsideClick from '../utils/hooks/on-outside-click';

import {
    Container,
    StyledInput,
    Error,
    HintText,
    ErrorIcon,
    InputIcon,
} from './input.styled';

function Input(props) {
    const {
        value,
        type,
        min,
        max,
        label,
        className,
        error,
        name,
        theme,
        disabled,
        hintText,
        icon,
        onFocus,
        onBlur,
        onChange,
        onIconClick,
    } = props;

    const inputRef = useRef(null);
    const containerRef = useRef(null);

    const [focused, setFocus] = useState(false);

    const handleOutsideClick = event => {
        if (focused) {
            onBlur && onBlur(value);
            setFocus(false);
        }
    };

    onOutsideClick(containerRef, handleOutsideClick);

    const getIcon = () => {
        if (error && !disabled) return <ErrorIcon />;
        if (icon)
            return (
                <InputIcon
                    icon={icon}
                    onClick={e => onIconClick && onIconClick(e)}
                />
            );
    };

    const handleFocus = event => {
        onFocus && onFocus(event.target.value);
        setFocus(true);
    };

    const handleChange = event => {
        onChange && onChange(event.target.value);
    };

    const handleContainerClick = () =>
        inputRef.current && inputRef.current.focus();

    return (
        <Container
            ref={containerRef}
            label={label}
            focused={focused}
            value={value}
            error={error}
            className={className}
            theme={theme}
            disabled={disabled}
            hintText={hintText}
            onClick={handleContainerClick}
            data-testid="container"
        >
            <StyledInput
                ref={inputRef}
                name={name || label}
                onFocus={handleFocus}
                type={type}
                value={value}
                min={min}
                max={max}
                theme={theme}
                disabled={disabled}
                onChange={handleChange}
                autoComplete="none"
            />
            {getIcon()}
            <Error>{error}</Error>
            <HintText>{hintText}</HintText>
        </Container>
    );
}

Input.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    label: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    name: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    disabled: PropTypes.bool,
    hintText: PropTypes.string,
    icon: PropTypes.string,
};

Input.defaultProps = { theme, type: 'text', disabled: false };

export default Input;
