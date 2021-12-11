import React from 'react';
import { storiesOf } from '@storybook/react';

import styled, { ThemeProvider } from 'styled-components';
import Expandable from './expandable';

import theme from '../utils/theme';

const Wrapper = styled.div`
    padding: 2rem;
    display: flex;
    height: 600px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

storiesOf('Expandable', module)
    .add('Title', () => (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Expandable
                    title="Item Number One"
                    renderExpanded={() => (
                        <div style={{ height: '100px' }}>I AM THE EXPANDED</div>
                    )}
                ></Expandable>
                <Expandable
                    title="Item Number Two"
                    renderExpanded={() => (
                        <div style={{ height: '300px' }}>I AM THE EXPANDED</div>
                    )}
                ></Expandable>
                <Expandable
                    title="Item Number Three"
                    renderExpanded={() => (
                        <div style={{ height: '300px' }}>I AM THE EXPANDED</div>
                    )}
                ></Expandable>
            </Wrapper>
        </ThemeProvider>
    ))
    .add('Render Collapsed', () => (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Expandable
                    title="Item Number One"
                    renderExpanded={() => (
                        <div style={{ height: '100px' }}>I AM THE EXPANDED</div>
                    )}
                    renderCollapsed={theme => (
                        <div>
                            I am the content from renderCollapsed. theme primary
                            color: {theme.primary}
                        </div>
                    )}
                ></Expandable>
            </Wrapper>
        </ThemeProvider>
    ));
