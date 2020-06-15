import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: center;
`;

const Main = styled.div`
    display: flex;
`;

import Button from './index';

const getButtonsForStory = ({
    type,
    status,
    outline,
    text,
    async = false,
    label,
}) => {
    const buttons = label
        ? [{ label, icon: 'accessible_forward' }]
        : [
              { icon: 'thumb_up', label: 'Longer Label' },
              { icon: 'face', label: 'Ok' },
          ];
    const NOOP = action('Clicked Button');
    const asyncHandler = () =>
        new Promise(resolve => setTimeout(resolve, 4000));

    return (
        <Wrapper>
            {status}
            {buttons.map(({ icon, label }, i) => (
                <Button
                    outline={outline}
                    text={text}
                    onClick={async ? asyncHandler : NOOP}
                    icon={i === 0 ? '' : icon}
                    label={label.split(' ')[0]}
                    size="small"
                    type={type}
                />
            ))}
            {buttons.map(({ icon, label }, i) => (
                <Button
                    outline={outline}
                    text={text}
                    disabled
                    onClick={async ? asyncHandler : NOOP}
                    icon={i === 0 ? '' : icon}
                    label={label.split(' ')[0]}
                    size="small"
                    type={type}
                />
            ))}
            {buttons.map(({ icon, label }, i) => (
                <Button
                    outline={outline}
                    text={text}
                    onClick={async ? asyncHandler : NOOP}
                    icon={i === 0 ? '' : icon}
                    label={label}
                    size="medium"
                    type={type}
                />
            ))}
            {buttons.map(({ icon, label }, i) => (
                <Button
                    outline={outline}
                    text={text}
                    disabled
                    onClick={async ? asyncHandler : NOOP}
                    icon={i === 0 ? '' : icon}
                    label={label}
                    size="medium"
                    type={type}
                />
            ))}
            {buttons.map(({ icon, label }, i) => (
                <Button
                    outline={outline}
                    text={text}
                    onClick={async ? asyncHandler : NOOP}
                    icon={i === 0 ? '' : icon}
                    label={label}
                    size="large"
                    type={type}
                />
            ))}
            {buttons.map(({ icon, label }, i) => (
                <Button
                    outline={outline}
                    text={text}
                    disabled
                    onClick={async ? asyncHandler : NOOP}
                    icon={i === 0 ? '' : icon}
                    label={label}
                    size="large"
                    type={type}
                />
            ))}
        </Wrapper>
    );
};

storiesOf('Button', module)
    .add('Outline', () => (
        <Main>
            {getButtonsForStory({ status: 'Normal', outline: true })}
            {getButtonsForStory({
                status: 'Success',
                type: 'success',
                outline: true,
            })}
            {getButtonsForStory({
                status: 'Error',
                type: 'error',
                outline: true,
            })}
            {getButtonsForStory({
                status: 'Warning',
                type: 'warning',
                outline: true,
            })}
        </Main>
    ))
    .add('Normal', () => (
        <Main>
            {getButtonsForStory({ status: 'Normal' })}
            {getButtonsForStory({ status: 'Success', type: 'success' })}
            {getButtonsForStory({ status: 'Error', type: 'error' })}
            {getButtonsForStory({ status: 'Warning', type: 'warning' })}
        </Main>
    ))
    .add('Text', () => (
        <Main>
            {getButtonsForStory({ status: 'Normal', text: true })}
            {getButtonsForStory({
                status: 'Success',
                type: 'success',
                text: true,
            })}
            {getButtonsForStory({
                status: 'Error',
                type: 'error',
                text: true,
            })}
            {getButtonsForStory({
                status: 'Warning',
                type: 'warning',
                text: true,
            })}
        </Main>
    ))
    .add('Text Async', () => (
        <Main>
            {getButtonsForStory({
                status: 'Normal',
                text: true,
                label: 'Async',
                async: true,
            })}
            {getButtonsForStory({
                status: 'Success',
                type: 'success',
                text: true,
                label: 'Async',
                async: true,
            })}
            {getButtonsForStory({
                status: 'Error',
                type: 'error',
                text: true,
                label: 'Async',
                async: true,
            })}
            {getButtonsForStory({
                status: 'Warning',
                type: 'warning',
                text: true,
                label: 'Async',
                async: true,
            })}
        </Main>
    ))
    .add('Normal Async', () => (
        <Main>
            {getButtonsForStory({
                status: 'Normal',
                label: 'Async',
                async: true,
            })}
            {getButtonsForStory({
                status: 'Success',
                type: 'success',
                label: 'Async',
                async: true,
            })}
            {getButtonsForStory({
                status: 'Error',
                type: 'error',
                label: 'Async',
                async: true,
            })}
            {getButtonsForStory({
                status: 'Warning',
                type: 'warning',
                label: 'Async',
                async: true,
            })}
        </Main>
    ))
    .add('Outline Async', () => (
        <Main>
            {getButtonsForStory({
                status: 'Normal',
                label: 'Async',
                async: true,
                outline: true,
            })}
            {getButtonsForStory({
                status: 'Success',
                type: 'success',
                label: 'Async',
                async: true,
                outline: true,
            })}
            {getButtonsForStory({
                status: 'Error',
                type: 'error',
                label: 'Async',
                async: true,
                outline: true,
            })}
            {getButtonsForStory({
                status: 'Warning',
                type: 'warning',
                label: 'Async',
                async: true,
                outline: true,
            })}
        </Main>
    ));
