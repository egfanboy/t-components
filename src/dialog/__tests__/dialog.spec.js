import React from 'react';
import { Button } from '../..';
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
        primaryButton: { label: 'action' },
        cancelButton: { onClick: jest.fn() },
    });

    let wrapper;

    afterEach(() => wrapper && wrapper.unmount());

    describe('rendering', () => {
        it('should match the default snapshot', () => {
            wrapper = getWrapper();
            expect(wrapper).toMatchSnapshot();
        });

        it('should match the snapshot of warning buttons', () => {
            wrapper = getWrapper({ buttonType: 'warning' });

            expect(wrapper).toMatchSnapshot();
        });

        it('should match the snapshot of success buttons', () => {
            wrapper = getWrapper({ buttonType: 'success' });

            expect(wrapper).toMatchSnapshot();
        });

        it('should match the snapshot of error buttons', () => {
            wrapper = getWrapper({ buttonType: 'error' });

            expect(wrapper).toMatchSnapshot();
        });

        it('should match the snapshot of a custom cancel label', () => {
            wrapper = getWrapper({ cancelButton: { label: 'I am custom' } });

            expect(wrapper).toMatchSnapshot();
        });

        it('should match the snapshot of the disabled action button', () => {
            wrapper = getWrapper({ disablePrimaryButton: true });
            expect(wrapper).toMatchSnapshot();
        });

        it('should render the content from renderBody', () => {
            wrapper = getWrapper();
            expect(wrapper.find('#content')).toHaveLength(1);
        });

        it('should disable the action button if disableActionButton is true', () => {
            const actionButtonLabel = 'primary action label';

            wrapper = getWrapper({
                primaryButton: { label: actionButtonLabel },
                disablePrimaryButton: true,
            });

            const actionBtn = wrapper
                .find(Button)
                .filterWhere(n => n.contains(actionButtonLabel));

            expect(actionBtn).not.toBeUndefined();

            expect(actionBtn.props()).toHaveProperty('disabled', true);
        });

        it('should not render a primary button if there is none supplied', () => {
            wrapper = getWrapper({ primaryButton: null });

            expect(wrapper.find(Button)).toHaveLength(1);
        });
    });

    describe('actions', () => {
        it('should call onAction when clicking on the primary button', () => {
            const actionButtonLabel = 'primary action label';
            const onAction = jest.fn();

            wrapper = getWrapper({
                primaryButton: { onClick: onAction, label: actionButtonLabel },
            });

            wrapper
                .find(Button)
                .filterWhere(n => n.contains(actionButtonLabel))
                .simulate('click', {});

            expect(onAction).toHaveBeenCalledTimes(1);
        });

        it('should call onCancel when clicking on the cancel button', () => {
            const cancelButtonLabel = 'cancel label';
            const onCancel = jest.fn();
            wrapper = getWrapper({
                cancelButton: { onClick: onCancel, label: cancelButtonLabel },
            });

            wrapper
                .find(Button)
                .filterWhere(n => n.contains(cancelButtonLabel))
                .simulate('click', {});

            expect(onCancel).toHaveBeenCalledTimes(1);
        });
    });
});
