import React from 'react';
import { storiesOf } from '@storybook/react';

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

const getButtonsForStory = ({ type, status, outline, text }) => {
    const buttons = [
        { icon: 'thumb_up', label: 'Longer Label' },
        { icon: 'face', label: 'Ok' },
    ];
    const NOOP = () => null;

    return (
        <Wrapper>
            {status}
            {buttons.map(({ icon, label }, i) => (
                <Button
                    outline={outline}
                    text={text}
                    onClick={NOOP}
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
                    onClick={NOOP}
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
                    onClick={NOOP}
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
                    onClick={NOOP}
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
                    onClick={NOOP}
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
                    onClick={NOOP}
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
    ));
