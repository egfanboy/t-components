import React from 'react';

import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Icon from '../icon';
import theme from '../utils/theme';

import {
    StyledButton,
    ButtonContent,
    Label,
    IconWrapper,
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

    return (
        <StyledButton
            className={className}
            theme={theme}
            disabled={disabled}
            text={text}
            onClick={onClick}
            outline={outline}
            type={type}
            size={size}
        >
            <ButtonContent>
                {icon && (
                    <IconWrapper>
                        <Icon icon={icon} size="medium" />{' '}
                    </IconWrapper>
                )}
                <Label>{label}</Label>
            </ButtonContent>
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
