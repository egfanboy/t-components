import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import propTypes from 'prop-types';

import defaultTheme from '../utils/theme';

import {
    Wrapper,
    Title,
    ExpandedContainer,
    Container,
} from './expandable.styled';

function Expandable(props) {
    const {
        title,
        expandByDefault,
        theme,
        classList,
        renderExpanded,
        renderCollapsed,
    } = props;
    console.count('render');
    const [expanded, setExpanded] = useState(!!expandByDefault);

    return (
        <Container expanded={expanded} classList={classList} theme={theme}>
            <Wrapper
                expanded={expanded}
                onClick={() => setExpanded(!expanded)}
                theme={theme}
            >
                {typeof renderCollapsed === 'function' ? (
                    renderCollapsed({ theme })
                ) : (
                    <Title expanded={expanded} theme={theme}>
                        {title}
                    </Title>
                )}
            </Wrapper>

            {expanded && (
                <ExpandedContainer theme={theme}>
                    {renderExpanded({ collapse: () => setExpanded(false) })}
                </ExpandedContainer>
            )}
        </Container>
    );
}

export default withTheme(Expandable);

Expandable.propTypes = {
    title: propTypes.string,
    classList: propTypes.string,
    theme: propTypes.object,
    renderExpanded: propTypes.func.isRequired,
    renderCollapsed: propTypes.func,
};

Expandable.defaultProps = {
    theme: defaultTheme,
};
