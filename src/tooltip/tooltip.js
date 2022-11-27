import React, { useState, useEffect, useRef } from 'react';
import { withTheme } from 'styled-components';

import { Container } from './tooltip.styled';

export const Tooltip = withTheme(props => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipCoords, setTooltipCoords] = useState({
        left: '0px',
        top: '0px',
    });

    const containerRef = useRef();

    const handleMouseOver = event => {
        if (
            props.childRef.current &&
            props.childRef.current.contains(event.target) &&
            !showTooltip
        ) {
            setShowTooltip(true);

            const tooltipContainerRect = containerRef.current.getBoundingClientRect();

            const clientRect = props.childRef.current.getBoundingClientRect();

            const coords = {
                // center the tooltip above the child
                left: clientRect.x + clientRect.width / 2,
                // 5px above the child
                top: clientRect.y - 5,
            };

            /*
             * If the tooltip will clip with the top of the window recalculate the height under the element
             * formula: distance of child from the top + height of the child = bottom of tooltip container is level with the bottom of the chield
             * + height of tooltip container = top of tooltip is now level with the bottom of the child + 5 for a buffer
             */
            if (coords.top < tooltipContainerRect.height) {
                coords.top =
                    clientRect.top +
                    clientRect.height +
                    tooltipContainerRect.height +
                    5;
            }

            /*
             * If the tooltip will clip with the right side of the window recalculate to shift tooltip where the right side of
             * the tooltip container is 5px fto the left of the edge of the window
             * formula: width of the window - 5 for padding - half the width of the tooltip container to still try to center it
             */

            if (
                window.innerWidth <
                coords.left + tooltipContainerRect.width / 2
            ) {
                coords.left =
                    window.innerWidth - 5 - tooltipContainerRect.width / 2;
            }

            /*
             * If the tooltip will clip with the left side of the window recalculate to shift tooltip where the left side of
             * the tooltip container is 5px to the right of the edge of the window
             * formula: half the width of the tooltip to try and center it + 5 for padding
             */
            if (coords.left - tooltipContainerRect.width / 2 < 0) {
                coords.left = tooltipContainerRect.width / 2 + 5;
            }

            setTooltipCoords({
                left: `${coords.left}px`,
                top: `${coords.top}px`,
            });
        } else {
            setShowTooltip(false);
        }
    };

    useEffect(() => {
        // add when mounted
        document.addEventListener('mouseover', handleMouseOver);

        // return function to be called when unmounted
        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <Container
            ref={containerRef}
            style={{ ...tooltipCoords }}
            theme={props.theme}
            hoverColor={props.hoverColor}
            hidden={!showTooltip}
        >
            {props.text}
        </Container>
    );
});
