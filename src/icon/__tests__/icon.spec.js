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
});
