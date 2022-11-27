import styled, { css } from 'styled-components';

import Icon from '../icon';

export const ErrorIcon = styled(Icon)`
    cursor: default;
`;
ErrorIcon.defaultProps = { icon: 'info', size: 'large' };

export const InputIcon = styled(Icon)`
    cursor: default;
    color: rgb(117, 117, 117);
    transition: color 0.4s;
`;
InputIcon.defaultProps = { size: 'large' };

const getErrorStyle = ({ error, theme, disabled }) => {
    if (error && !disabled) {
        return css`
            border-color: ${theme.error};
            ${Error} {
                visibility: visible;
                color: ${theme.error};
            }
            ${ErrorIcon} {
                color: ${theme.error};
            }
            ${StyledInput} {
                caret-color: ${theme.error};
            }

            &:after {
                color: ${theme.error};
            }
        `;
    }
};

const getHintTextStyle = ({ error, hintText }) => {
    if (!error && hintText) {
        return css`
            ${HintText} {
                visibility: visible;
            }
        `;
    }
};

const getLabelStyle = ({ label, value, focused, theme }) => css`
    &:after {
        content: ${label ? `'${label}'` : ''};
        position: absolute;
        left: 20px;
        top: 50%;
        margin-top: -10px;
        transition: all 0.4s, color 0.2s;
        color: rgb(117, 117, 117);
        ${() => {
            if ((typeof value !== 'undefined' && value !== '') || focused)
                return css`
                    margin-top: -30px;
                    left: 10px;
                    font-size: 14px;
                    background-color: inherit;
                    padding: 0px 4px;
                    color: ${focused && theme.primary};
                `;
        }};
    }
`;

export const Container = styled.div`
    position: relative;
    display: flex;

    margin: 10px 10px 30px 10px;
    border: solid 1px rgb(117, 117, 117);
    border-radius: 4px;
    box-sizing: border-box;
    height: 44px;
    padding: 4px 8px;
    align-items: center;
    background-color: inherit;
    &:hover {
        cursor: text;
    }
    ${({ disabled, focused, theme }) => {
        if (disabled) {
            return css`
                opacity: 0.5;

                &:hover {
                    cursor: not-allowed;
                }

                &:after {
                    opacity: 0.5;
                }
            `;
        }
        if (focused) {
            return css`
                border-color: ${theme.primary};
                ${InputIcon} {
                    color: ${theme.primary};
                }
            `;
        }
    }}
    ${getLabelStyle};
    ${getErrorStyle};
    ${getHintTextStyle};
`;

export const Error = styled.span`
    position: absolute;
    visibility: hidden;
    bottom: -20px;
    left: 8px;
    font-size: 14px;
`;

export const HintText = styled.span`
    position: absolute;
    visibility: hidden;
    bottom: -20px;
    width: 100%;
    font-size: 14px;
    color: rgb(117, 117, 117);
`;

export const StyledInput = styled.input`
    position: relative;

    width: 100%;
    border: none;
    cursor: inherit;
    caret-color: ${({ theme }) => theme.primary};
    font-size: 14px;
    background-color: transparent;

    &:focus {
        outline: none;
    }
`;
