import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import Dialog from './dialog';
import { useDialog } from '../utils/hooks/use-dialog';
import Button from '../button';

const Wrapper = styled.div`
    padding: 4rem;
`;

const DialogStory = props => {
    const { showDialog, toggle } = useDialog();

    return (
        <Wrapper>
            <Button label="Show Dialog" onClick={() => toggle()}></Button>
            <Dialog
                show={showDialog}
                cancelButton={{ onClick: toggle }}
                primaryButton={
                    props.noPrimary
                        ? null
                        : {
                              label: 'primary',
                              onClick: () => {
                                  action('primary action')();
                                  toggle();
                              },
                          }
                }
                title="My Dialog"
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
                disablePrimaryButton={props.disableActionButton}
                buttonType={props.buttonType}
            ></Dialog>
        </Wrapper>
    );
};

storiesOf('Dialog', module)
    .add('Short content', () => <DialogStory itemLength={1}></DialogStory>)
    .add('Long content', () => <DialogStory itemLength={30}></DialogStory>)
    .add('Disable primary', () => (
        <DialogStory itemLength={1} disableActionButton></DialogStory>
    ))
    .add('No primary', () => (
        <DialogStory itemLength={1} noPrimary></DialogStory>
    ))
    .add('Success Buttons', () => (
        <DialogStory itemLength={1} buttonType="success"></DialogStory>
    ))
    .add('Warning Buttons', () => (
        <DialogStory itemLength={1} buttonType="warning"></DialogStory>
    ))
    .add('Error Buttons', () => (
        <DialogStory itemLength={1} buttonType="error"></DialogStory>
    ));
