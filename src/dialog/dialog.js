import React from 'react';
import ReactDOM from 'react-dom';
import Proptypes from 'prop-types';

import { withTheme } from 'styled-components';
import {
    Overlay,
    Container,
    Modal,
    Body,
    ButtonContainer,
} from './dialog-styled';
import Button from '../button';
import theme from '../utils/theme';

const Dialog = ({
    show,
    actionButtonLabel,
    cancelButtonLabel,
    renderBody,
    disableActionButton,
    onAction,
    buttonType,
    onCancel,
}) => {
    return show
        ? ReactDOM.createPortal(
              <React.Fragment>
                  <Overlay></Overlay>
                  <Container>
                      <Modal aria-modal aria-hidden tabIndex={-1} role="dialog">
                          <Body>{renderBody()}</Body>
                          <ButtonContainer>
                              <Button
                                  label={cancelButtonLabel || 'Close'}
                                  outline
                                  type={buttonType}
                                  onClick={e => onCancel(e)}
                              ></Button>
                              <Button
                                  label={actionButtonLabel}
                                  type={buttonType}
                                  disabled={disableActionButton}
                                  onClick={e => onAction(e)}
                              ></Button>
                          </ButtonContainer>
                      </Modal>
                  </Container>
              </React.Fragment>,
              document.body
          )
        : null;
};

Dialog.proptypes = {
    renderBody: Proptypes.func.isRequired,
    primaryButton: Proptypes.shape({
        label: Proptypes.string.isRequired,
    }),
    cancelButton: {
        type: Proptypes.oneOf(['success', 'warning', 'error', 'primary']),
        label: Proptypes.string,
    },
    disableActionButton: Proptypes.bool,

    onAction: Proptypes.func.isRequired,
    onCancel: Proptypes.func.isRequired,
    buttonType: Proptypes.oneOf(['success', 'warning', 'error', 'primary']),
    actionButtonLabel: Proptypes.string.isRequired,
    cancelButtonLabel: Proptypes.string,
};

Dialog.defaultProps = {
    primaryButton: {},
    cancelButton: {},
    theme,
};

export default withTheme(Dialog);
