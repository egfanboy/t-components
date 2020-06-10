import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { IconButton } from './icon-button';

const Wrapper = styled.div`
    padding: 2rem;
    display: flex;
    height: 600px;
    align-items: center;
    justify-content: center;
`;

storiesOf('Icon Buttons', module).add('Normal', () => (
    <Wrapper>
        <IconButton
            icon="delete"
            tooltip="Some Button that will complete an action on our UI"
            onClick={action('Clicked Icon Button')}
        ></IconButton>
    </Wrapper>
));
