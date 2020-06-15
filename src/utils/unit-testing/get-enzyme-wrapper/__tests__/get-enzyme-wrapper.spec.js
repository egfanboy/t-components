import React from 'react';
import { mount, shallow } from 'enzyme';
import { makeGetEnzymeWrapper } from '../get-enzyme-wrapper';

jest.mock('enzyme');

describe('makeGetEnzymeWrapper', () => {
    const Component = function() {
        return <div>Hi</div>;
    };
    const defaultProps = { hello: 'hi' };

    let getWrapper;
    beforeEach(
        () => (getWrapper = makeGetEnzymeWrapper(Component, defaultProps))
    );

    it('should return a function', () => {
        expect(makeGetEnzymeWrapper()).toBeInstanceOf(Function);
    });

    it('should use enzyme `mount` by default and always pass default props', () => {
        getWrapper();

        expect(mount).toHaveBeenCalledWith(<Component {...defaultProps} />);
    });

    it('should be able to pass extra props specific to a test', () => {
        const extraProps = { cool: 'beans' };
        getWrapper(extraProps);

        const mergedProps = { ...defaultProps, ...extraProps };

        expect(mount).toHaveBeenCalledWith(<Component {...mergedProps} />);
    });

    it('should override defaultProps with extra specific props', () => {
        const extraProps = { hello: 'how are you' };
        getWrapper(extraProps);

        expect(mount).toHaveBeenCalledWith(<Component hello="how are you" />);
    });

    it('should be able to use another function to display component', () => {
        getWrapper({}, shallow);

        expect(shallow).toHaveBeenCalledTimes(1);
    });
});
