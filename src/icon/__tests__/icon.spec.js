import makeGetWrapper from '../../utils/unit-testing/get-enzyme-wrapper';

import { StyledIcon } from '../icon.styled';
import Icon from '../index';

describe('Icon', () => {
    const getWrapper = makeGetWrapper(Icon, { size: 'medium', icon: 'mdIcon' });

    describe('rendering', () => {
        it('should render a StyledIcon', () => {
            const wrapper = getWrapper();

            expect(wrapper.find(StyledIcon)).toHaveLength(1);
        });
    });

    describe('action', () => {
        it('should call the onClick function when clicked', () => {
            const onClick = jest.fn();
            const wrapper = getWrapper({ onClick });

            wrapper.find(StyledIcon).simulate('click');

            expect(onClick).toHaveBeenCalledTimes(1);
        });
    });
});
