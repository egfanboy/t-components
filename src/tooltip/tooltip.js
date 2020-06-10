import React, { useState, useEffect } from 'react';

import { Container } from './tooltip.styled';

export const Tooltip = props => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipCoords, setTooltipCoords] = useState({ left: 0, top: 0 });

    const handleMouseOver = event => {
        if (
            props.childRef.current &&
            props.childRef.current.contains(event.target)
        ) {
            setShowTooltip(true);

            const clientRect = event.target.getBoundingClientRect();

            setTooltipCoords(
                props.calculateCoords
                    ? props.calculateCoords(clientRect)
                    : {
                          left: clientRect.x + clientRect.width / 2,
                          top: clientRect.y + window.scrollY,
                      }
            );
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

    return showTooltip ? (
        <Container style={{ ...tooltipCoords }}>{props.text}</Container>
    ) : null;
};
