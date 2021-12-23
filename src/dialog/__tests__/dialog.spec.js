import React from 'react';
import { Button } from '../..';
import { Label, StyledButton } from '../../button/button.styled';
import { makeGetEnzymeWrapper } from '../../utils/unit-testing/get-enzyme-wrapper';
import Dialog from '../dialog';

const renderBody = () => (
    <div>
        <p id="content">I am the body</p>
    </div>
);

describe('Dialog', () => {
    const getWrapper = makeGetEnzymeWrapper(Dialog, {
        show: true,
        renderBody,
        actionButtonLabel: 'action',
    });

    let wrapper;

    beforeEach(() => (wrapper = getWrapper()));

    afterEach(() => wrapper && wrapper.unmount());

    describe('rendering', () => {
        it('should match the default snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('should match the snapshot of warning buttons', () => {
            expect(getWrapper({ buttonType: 'warning' })).toMatchSnapshot();
        });

        it('should match the snapshot of success buttons', () => {
            expect(getWrapper({ buttonType: 'success' })).toMatchSnapshot();
        });

        it('should match the snapshot of error buttons', () => {
            expect(getWrapper({ buttonType: 'error' })).toMatchSnapshot();
        });

        it('should match the snapshot of a custom cancel label', () => {
            expect(
                getWrapper({ cancelButtonLabel: 'I am custom' })
            ).toMatchSnapshot();
        });

        it('should match the snapshot of the disabled action button', () => {
            expect(getWrapper({ disableActionButton: true })).toMatchSnapshot();
        });

        it('should render the content from renderBody', () => {
            expect(wrapper.find('#content')).toHaveLength(1);
        });

        it('should disable the action button if disableActionButton is true', () => {
            const actionButtonLabel = 'primary action label';

            wrapper = getWrapper({
                actionButtonLabel,
                disableActionButton: true,
            });

            const actionBtn = wrapper
                .find(Button)
                .filterWhere(n => n.contains(actionButtonLabel));

            expect(actionBtn).not.toBeUndefined();

            expect(actionBtn.props()).toHaveProperty('disabled', true);
        });
    });

    describe('actions', () => {
        it('should call onAction when clicking on the primary button', () => {
            const actionButtonLabel = 'primary action label';
            const onAction = jest.fn();
            wrapper = getWrapper({ onAction, actionButtonLabel });

            wrapper
                .find(Button)
                .filterWhere(n => n.contains(actionButtonLabel))
                .simulate('click', {});

            expect(onAction).toHaveBeenCalledTimes(1);
        });

        it('should call onCancel when clicking on the cancel button', () => {
            const cancelButtonLabel = 'cancel label';
            const onCancel = jest.fn();
            wrapper = getWrapper({ onCancel, cancelButtonLabel });

            wrapper
                .find(Button)
                .filterWhere(n => n.contains(cancelButtonLabel))
                .simulate('click', {});

            expect(onCancel).toHaveBeenCalledTimes(1);
        });
    });
});
