import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Number from './index';

function NumberField({ children }) {
    const [value, setValue] = useState('');
    return children({ value, setValue });
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
`;

const Wrapper = styled.div`
    width: 300px;
    margin: 10px;
`;

storiesOf('Number Inputs', module).add('Normal', () => (
    <Main>
        <Wrapper>
            <NumberField>
                {({ value, setValue }) => (
                    <Number
                        value={value}
                        onChange={value => {
                            console.log({ value });
                            setValue(value);
                        }}
                    />
                )}
            </NumberField>
        </Wrapper>
    </Main>
));
