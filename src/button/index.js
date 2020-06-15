import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Icon from '../icon';
import theme from '../utils/theme';

import {
    StyledButton,
    ButtonContent,
    Label,
    IconWrapper,
    Spinner,
} from './button.styled';

const Button = function Button(props) {
    const {
        onClick,
        type,
        label,
        icon,
        disabled,
        text,
        outline,
        size,
        className,
    } = props;

    const [loading, setLoading] = useState(false);

    const getColor = () => {
        if (type === 'warning') return theme.warning;
        if (type === 'success') return theme.success;
        if (type === 'error') return theme.error;
        return theme.primary;
    };

    const getContent = () => {
        if (loading) {
            return <Spinner height="30" color={getColor()}></Spinner>;
        }

        return (
            <>
                {icon && (
                    <IconWrapper>
                        <Icon icon={icon} size="medium" />
                    </IconWrapper>
                )}
                <Label>{label}</Label>
            </>
        );
    };

    const clickHandler = event => {
        if (loading) return;
        if (onClick) {
            const clickReturn = onClick(event);

            if (clickReturn instanceof Promise) {
                setLoading(true);

                clickReturn.finally(() => setLoading(false));
            }
        }
    };

    return (
        <StyledButton
            className={className}
            theme={theme}
            disabled={disabled}
            text={text}
            onClick={clickHandler}
            outline={outline}
            type={type}
            size={size}
            isLoading={loading}
        >
            <ButtonContent>{getContent()}</ButtonContent>
        </StyledButton>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'warning', 'error', 'primary']),
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    text: PropTypes.bool,
    outline: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
    type: 'primary',
    disabled: false,
    text: false,
    outline: false,
    theme,
    size: 'large',
};

export default withTheme(Button);
