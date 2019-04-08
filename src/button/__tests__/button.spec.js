import {
    StyledButton,
    ButtonContent,
    Label,
    IconWrapper,
} from '../button.styled';
import makeGetEnzymeWrapper from '../../utils/unit-testing/get-enzyme-wrapper';

import Button from '../index';
import Icon from '../../icon';

describe('button', () => {
    const getWrapper = makeGetEnzymeWrapper(Button, {
        size: 'medium',
        label: 'Button',
        onClick: () => null,
    });

    describe('rendering', () => {
        let wrapper;
        beforeEach(() => (wrapper = getWrapper()));
        afterEach(() => wrapper && wrapper.unmount());

        it('should render without error', () => {
            expect(() => getWrapper()).not.toThrow();
        });

        it('should render render a StyledButton, ButtonContent and Label styled components', () => {
            expect(wrapper.find(StyledButton)).toHaveLength(1);
            expect(wrapper.find(ButtonContent)).toHaveLength(1);
            expect(wrapper.find(Label)).toHaveLength(1);
        });

        it('should only render an IconWrapper is the icon prop is present', () => {
            const wrapperIcon = getWrapper({ icon: 'mdIcon' });

            expect(wrapperIcon.find(IconWrapper)).toHaveLength(1);
            expect(wrapperIcon.find(Icon)).toHaveLength(1);
            expect(wrapper.find(IconWrapper)).toHaveLength(0);
            expect(wrapper.find(Icon)).toHaveLength(0);

            wrapperIcon.unmount();
        });
    });

    describe('styles', () => {
        let wrapper;

        afterEach(() => wrapper && wrapper.unmount());

        it('should match the default snapshot', () => {
            wrapper = getWrapper();
            expect(wrapper).toMatchSnapshot();
        });

        it('should match the disabled snapshot', () => {
            wrapper = getWrapper({ disabled: true });
            expect(wrapper).toMatchSnapshot();
        });

        it('should match the small size snapshot', () => {
            wrapper = getWrapper({ size: 'small' });
            expect(wrapper).toMatchSnapshot();
        });

        it('should match the medium size snapshot', () => {
            wrapper = getWrapper({ size: 'medium' });
            expect(wrapper).toMatchSnapshot();
        });

        it('should match the large size snapshot', () => {
            wrapper = getWrapper({ size: 'large' });
            expect(wrapper).toMatchSnapshot();
        });

        it('should match the error type button snapshot', () => {
            wrapper = getWrapper({ type: 'error' });
            expect(wrapper).toMatchSnapshot();
        });

        it('should match the warning type button snapshot', () => {
            wrapper = getWrapper({ type: 'warning' });
            expect(wrapper).toMatchSnapshot();
        });

        it('should match the success type button snapshot', () => {
            wrapper = getWrapper({ type: 'success' });
            expect(wrapper).toMatchSnapshot();
        });

        it('should match the button with icon snapshot', () => {
            wrapper = getWrapper({ icon: 'mdIcon' });
            expect(wrapper).toMatchSnapshot();
        });

        it('should match the outline button snapshot', () => {
            wrapper = getWrapper({ outline: true });
            expect(wrapper).toMatchSnapshot();
        });

        it('should match the text button snapshot', () => {
            wrapper = getWrapper({ text: true });
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        it('should call onClick when button is clicked', () => {
            const onClickSpy = jest.fn();
            const wrapper = getWrapper({ onClick: onClickSpy });

            wrapper.find(StyledButton).simulate('click');

            expect(onClickSpy).toHaveBeenCalledTimes(1);
        });
    });
});
