import React, { useRef } from 'react';
import { withTheme } from 'styled-components';
import { StyledIconButton } from './icon-button.styled';
import theme from '../utils/theme';
import { Tooltip } from '../tooltip/tooltip';

export const IconButton = withTheme(props => {
    const { className, icon, onClick } = props;

    const ref = useRef();

    const calculateCoords = clientRect => {
        return {
            left: `${clientRect.x + clientRect.width / 2}px`,
            top: `${clientRect.y - 10}px`,
        };
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
            <StyledIconButton
                className={className}
                innerRef={ref}
                theme={theme}
                icon={icon}
                size="large"
                onClick={e => onClick && onClick(e)}
            ></StyledIconButton>
        </>
    );
});
