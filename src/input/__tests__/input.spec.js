import React from 'react';

import { render, fireEvent, cleanup, wait } from 'react-testing-library';

import Input from '../index';
import { StyledInput, Container } from '../input.styled';
import { makeGetEnzymeWrapper } from '../../utils/unit-testing/get-enzyme-wrapper';

describe('Input', () => {
    const getWrapper = makeGetEnzymeWrapper(Input);
    afterEach(cleanup);

    describe('rendering', () => {
        let wrapper;
        beforeEach(() => (wrapper = getWrapper()));
        afterEach(() => wrapper && wrapper.unmount());

        it('should match the default snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should match the error snapshot', () => {
            wrapper = getWrapper({ error: 'Uh Oh' });

            expect(wrapper).toMatchSnapshot();
        });

        it('should match the focused snapshot', () => {
            wrapper = getWrapper();

            wrapper.find(StyledInput).simulate('focus');

            expect(wrapper.find(Container).props()).toHaveProperty(
                'focused',
                true
            );

            expect(wrapper).toMatchSnapshot();
        });

        it('should match the snapshot with a value ', () => {
            wrapper = getWrapper({ value: 'Hello' });

            expect(wrapper).toMatchSnapshot();
        });

        it('should match the focused with text snapshot', () => {
            wrapper = getWrapper({ value: 'Hello' });

            wrapper.find(StyledInput).simulate('focus');

            expect(wrapper.find(Container).props()).toHaveProperty(
                'focused',
                true
            );

            expect(wrapper).toMatchSnapshot();
        });

        it('should match the hint text snapshot', () => {
            const hintText = 'Put something';
            wrapper = getWrapper({ hintText });

            expect(wrapper).toMatchSnapshot();
        });

        it('should match the hint text and error snapshot', () => {
            const hintText = 'Put something';
            wrapper = getWrapper({ hintText, error: 'Uh Oh' });

            expect(wrapper).toMatchSnapshot();
        });

        it('should match the disabled snapshot', () => {
            wrapper = getWrapper({ disabled: true });

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('actions', () => {
        it('should call onBlur with the value when another element in the DOM gets focus', () => {
            const onBlur = jest.fn();
            const value = 'hello';
            const TestComponent = () => (
                <div>
                    <button id="other" />
                    <Input onBlur={onBlur} value={value} />
                </div>
            );

            const { container, rerender } = render(<TestComponent />);

            fireEvent.focus(container.querySelector('input'));

            rerender(<TestComponent />);

            fireEvent.click(container.querySelector('#other'));

            expect(onBlur).toHaveBeenCalledTimes(1);
            expect(onBlur).toHaveBeenCalledWith(value);
        });

        it('should call onFocus when the input gets focused', () => {
            const onFocus = jest.fn();

            const { container } = render(<Input onFocus={onFocus} />);

            fireEvent.focus(container.querySelector('input'));

            expect(onFocus).toHaveBeenCalledTimes(1);
        });

        it('should set the focus on the input when the container is clicked', () => {
            const onFocus = jest.fn();

            const { getByTestId } = render(<Input onFocus={onFocus} />);

            fireEvent.click(getByTestId('container'));

            expect(onFocus).toHaveBeenCalledTimes(1);
        });

        it('should stay focused if the icon is clicked', () => {
            const onFocus = jest.fn();

            const { container, getByTestId } = render(
                <Input onFocus={onFocus} label="Hello" icon="lock" />
            );

            fireEvent.click(getByTestId('container'));
            fireEvent.click(container.querySelector('i'));

            expect(container.querySelector('input')).toHaveFocus();
        });

        it('should call onChange on change', () => {
            const onChange = jest.fn();
            const value = 'Johny';

            const { container, getByTestId } = render(
                <Input onChange={onChange} label="Hello" icon="lock" />
            );

            fireEvent.change(container.querySelector('input'), {
                target: { value },
            });

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith(value);
        });
    });
});
