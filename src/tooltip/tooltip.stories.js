import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { IconButton } from '../icon-button/icon-button';

const Wrapper = styled.div`
    padding: 4rem;
`;

storiesOf('Tooltip', module).add('Normal', () => (
    <>
        <Wrapper>
            <div id="tooltip-root"> </div>

            <IconButton tooltip="Lol"></IconButton>
        </Wrapper>
    </>
));
