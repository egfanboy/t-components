import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { IconButton } from '../icon-button/icon-button';

const Wrapper = styled.div`
    padding: 4rem;
    display: flex;
    height: 80vh;
`;

const veryLongText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

storiesOf('Tooltip', module)
    .add('Aligned Left', () => (
        <>
            <Wrapper style={{ marginLeft: '-40px' }}>
                <div id="tooltip-root"> </div>

                <IconButton tooltip={veryLongText} icon="delete"></IconButton>
            </Wrapper>
        </>
    ))
    .add('Aligned Top', () => (
        <>
            <Wrapper style={{ marginTop: '-40px', marginLeft: '100px' }}>
                <div id="tooltip-root"> </div>

                <IconButton tooltip={veryLongText} icon="delete"></IconButton>
            </Wrapper>
        </>
    ))
    .add('Aligned Bottom', () => (
        <>
            <Wrapper
                style={{
                    marginBottom: '-40px',
                    marginLeft: '100px',
                    alignItems: 'flex-end',
                }}
            >
                <div id="tooltip-root"> </div>

                <IconButton tooltip={veryLongText} icon="delete"></IconButton>
            </Wrapper>
        </>
    ))
    .add('Aligned Right', () => (
        <>
            <Wrapper
                style={{
                    justifyContent: 'flex-end',
                    marginRight: '-60px',
                }}
            >
                <div id="tooltip-root"> </div>

                <IconButton tooltip={veryLongText} icon="delete"></IconButton>
            </Wrapper>
        </>
    ));
