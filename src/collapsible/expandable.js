import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import propTypes from 'prop-types';

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

    const [expanded, setExpanded] = useState(!!expandByDefault);

    return (
        <Container expanded={expanded} classList={classList}>
            <Wrapper expanded={expanded} onClick={() => setExpanded(!expanded)}>
                {typeof renderCollapsed === 'function' ? (
                    renderCollapsed(theme)
                ) : (
                    <Title expanded={expanded} theme={theme}>
                        {title}
                    </Title>
                )}
            </Wrapper>

            {expanded && (
                <ExpandedContainer>{renderExpanded()}</ExpandedContainer>
            )}
        </Container>
    );
}

export default withTheme(Expandable);

Expandable.PropTypes = {
    title: propTypes.string,
    classList: propTypes.string,
    theme: propTypes.object,
    renderExpanded: propTypes.func.isRequired,
    renderCollapsed: propTypes.func,
};
