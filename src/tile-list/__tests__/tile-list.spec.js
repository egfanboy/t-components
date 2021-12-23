import React from 'react';

import { Tile } from '../tile-list.styled';
import { makeGetEnzymeWrapper } from '../../utils/unit-testing/get-enzyme-wrapper';
import { TileList } from '../tile-list';

const items = [
    { key: 'key1', title: 'title1', description: '' },
    { key: 'key2', title: 'title2', description: 'Some description' },
];

describe('Tile List', () => {
    const getWrapper = makeGetEnzymeWrapper(TileList);

    let wrapper;
    beforeEach(() => (wrapper = getWrapper()));
    afterEach(() => wrapper && wrapper.unmount());

    describe('rendering', () => {
        it('should match the no items snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should match the snapshot with itemsu', () => {
            wrapper = getWrapper({ items });

            expect(wrapper).toMatchSnapshot();
        });

        it('should render one tile per item', () => {
            wrapper = getWrapper({ items });

            expect(wrapper.find(Tile).length).toEqual(items.length);
        });
    });

    describe('actions', () => {
        it('should call onFocus when the input gets focused', () => {
            const tileClick = jest.fn();

            wrapper = getWrapper({ items, onTileClick: tileClick });

            const tile = wrapper.find(Tile).first();

            tile.simulate('click', {});

            expect(tileClick).toHaveBeenCalledTimes(1);
            expect(tileClick).toHaveBeenCalledWith(items[0]);
        });
    });
});
