import React from 'react';
import { mount } from 'enzyme';
import { useDialog } from '../use-dialog';

describe('Use Dialog', () => {
    const Component = () => {
        const { showDialog, toggle } = useDialog();

        return (
            <div>
                <p id={showDialog ? 'show' : 'hide'}></p>
                <button onClick={() => toggle()}></button>
            </div>
        );
    };

    it('should return showDialog and a toggle function', () => {
        const wrapper = mount(<Component></Component>);

        expect(wrapper.find('#hide')).toHaveLength(1);
        expect(wrapper.find('#show')).toHaveLength(0);

        wrapper.find('button').simulate('click', {});

        expect(wrapper.find('#hide')).toHaveLength(0);
        expect(wrapper.find('#show')).toHaveLength(1);
    });
});
