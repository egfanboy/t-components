import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import Dialog from './dialog';
import { useDialog } from '../utils/hooks/use-dialog';
import Button from '../button';

const Wrapper = styled.div`
    padding: 4rem;
    background-color: red;
`;

const DialogStory = props => {
    const { showDialog, toggle } = useDialog();

    return (
        <Wrapper>
            <Button label="Show Dialog" onClick={() => toggle()}></Button>
            <Dialog
                show={showDialog}
                onCancel={toggle}
                onAction={() => {
                    action('primary action')();
                    toggle();
                }}
                title="My Dialog"
                actionButtonLabel="primary"
                renderBody={() => (
                    <div>
                        {Array.from({ length: props.itemLength }).map(
                            (_, i) => (
                                <p key={`content-${i}`}>
                                    {'I am some modal content'}
                                </p>
                            )
                        )}
                    </div>
                )}
                disableActionButton={props.disableActionButton}
            ></Dialog>
        </Wrapper>
    );
};

storiesOf('Dialog', module)
    .add('Short content', () => <DialogStory itemLength={1}></DialogStory>)
    .add('Long content', () => <DialogStory itemLength={30}></DialogStory>)
    .add('Disable primary', () => (
        <DialogStory itemLength={1} disableActionButton></DialogStory>
    ));
