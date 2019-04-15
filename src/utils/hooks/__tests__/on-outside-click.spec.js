import React, { useRef } from 'react';
import { mount } from 'enzyme';
import onOutsideClick from '../on-outside-click';

const mockHandler = jest.fn();

const map = {};

const addListenerMock = jest.fn((event, cb) => {
    map[event] = cb;
});

const removeListenerMock = jest.fn((event, cb) => {
    if (map[event] === cb) delete map[event];
});

document.addEventListener = addListenerMock;
document.removeEventListener = removeListenerMock;

const TestComponent = () => {
    const containerRef = useRef(null);
    onOutsideClick(containerRef, mockHandler);

    return (
        <div>
            <span>click me outside</span>
            <div ref={containerRef}>
                <span>click me inside</span>
            </div>
        </div>
    );
};

describe('onOutsideClick', () => {
    it('should call the handler if an element outside of container is the target of a click event', () => {
        const wrapper = mount(<TestComponent />);

        const insideSpan = wrapper.find('span[children="click me inside"]');
        const outsideSpan = wrapper.find('span[children="click me outside"]');

        map.click({ target: insideSpan.getDOMNode() });
        expect(mockHandler).toHaveBeenCalledTimes(0);

        map.click({ target: outsideSpan.getDOMNode() });
        expect(mockHandler).toHaveBeenCalledTimes(1);

        wrapper.unmount();

        // Test that hook cleans up
        expect(addListenerMock).toHaveBeenCalledTimes(1);
        expect(removeListenerMock).toHaveBeenCalledTimes(1);
        expect(map.click).toBeUndefined();
    });
});
