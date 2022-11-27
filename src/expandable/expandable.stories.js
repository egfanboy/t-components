import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import styled, { ThemeProvider } from 'styled-components';
import Expandable from './expandable';

import theme from '../utils/theme';
import { Button } from '..';

const Wrapper = styled.div`
    padding: 2rem;
    display: flex;
    height: 600px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

const item1 = {
    title: 'item1',
};

const item2 = {
    title: 'item2',
};

function ExpandableList(props) {
    console.log('HERE');
    return (
        <div>
            {props.items.map(i => (
                <Expandable
                    title={i.title}
                    renderExpanded={() => (
                        <div style={{ height: '100px' }}>I AM THE EXPANDED</div>
                    )}
                ></Expandable>
            ))}
        </div>
    );
}

function ExpandibleReRender() {
    const [items, setItems] = useState([item1]);

    return (
        <div>
            <Button
                label="Add/Remove item 2"
                onClick={() => {
                    if (items.length == 2) {
                        setItems([item1]);
                    } else {
                        setItems([item1, item2]);
                    }
                }}
            ></Button>

            <ExpandableList items={items}></ExpandableList>
        </div>
    );
}

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
                    renderCollapsed={({ theme }) => (
                        <div>
                            I am the content from renderCollapsed. theme primary
                            color: {theme.primary}
                        </div>
                    )}
                ></Expandable>
            </Wrapper>
        </ThemeProvider>
    ))
    .add('Re-redenring', () => (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <ExpandibleReRender></ExpandibleReRender>
            </Wrapper>
        </ThemeProvider>
    ));
