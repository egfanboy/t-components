import React, { useRef, useState } from 'react';
import { withTheme } from 'styled-components';
import { StyledIconButton, Wrapper, Spinner } from './icon-button.styled';
import theme from '../utils/theme';
import { Tooltip } from '../tooltip/tooltip';

export const IconButton = withTheme(props => {
    const { className, icon, onClick } = props;

    const ref = useRef();
    const [isLoading, setLoading] = useState(false);

    const calculateCoords = clientRect => {
        return {
            left: `${clientRect.x + clientRect.width / 2}px`,
            top: `${clientRect.y - 10}px`,
        };
    };

    const clickHandler = e => {
        if (isLoading) return;
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
                    text={props.tooltip}
                    childRef={ref}
                    calculateCoords={calculateCoords}
                ></Tooltip>
            )}

            {isLoading ? (
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
