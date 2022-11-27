import React, { useRef, useState } from 'react';
import { withTheme } from 'styled-components';
import { StyledIconButton, Wrapper, Spinner } from './icon-button.styled';
import theme from '../utils/theme';
import { Tooltip } from '../tooltip/tooltip';

export const IconButton = withTheme(props => {
    const { className, icon, onClick } = props;

    const ref = useRef();
    const [isLoading, setLoading] = useState(false);

    const clickHandler = e => {
        if (props.isLoading || isLoading) return;
        if (onClick) {
            const value = onClick(e);

            if (value instanceof Promise) {
                setLoading(true);

                value.finally(() => setLoading(false));
            }
        }
    };

    return (
        <>
            {props.tooltip && (
                <Tooltip
                    theme={theme}
                    text={props.tooltip}
                    childRef={ref}
                ></Tooltip>
            )}

            {props.isLoading || isLoading ? (
                <Spinner theme={theme} height="30"></Spinner>
            ) : (
                <StyledIconButton
                    className={className}
                    innerRef={ref}
                    theme={theme}
                    icon={icon}
                    size="large"
                    onClick={clickHandler}
                ></StyledIconButton>
            )}
        </>
    );
});
