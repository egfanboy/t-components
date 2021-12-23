import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { TileList } from './tile-list';
import theme from '../utils/theme';

const Wrapper = styled.div`
    padding: 4rem;
`;

const items = [
    {
        key: 'item-1',
        title: 'SOmething1',
        description: 'I am some type of footnote',
    },
    { key: 'item-2', title: 'SOmething2', description: '' },
    { key: 'item-3', title: 'SOmething3', description: '' },
    { key: 'item-4', title: 'SOmething4', description: '' },
    { key: 'item-6', title: 'SOmething5', description: '' },
    { key: 'item-7', title: 'SOmething6', description: '' },
    { key: 'item-8', title: 'SOmething7', description: '' },
];

storiesOf('TileList', module)
    .add('Normal', () => (
        <>
            <Wrapper>
                <TileList
                    theme={theme}
                    items={items}
                    onTileClick={t => console.log({ t })}
                ></TileList>
            </Wrapper>
        </>
    ))
    .add('Empty', () => (
        <>
            <Wrapper>
                <TileList
                    theme={theme}
                    items={[]}
                    onTileClick={t => console.log({ t })}
                ></TileList>
            </Wrapper>
        </>
    ));
