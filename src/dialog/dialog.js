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
    cancelButton,
    primaryButton,
    renderBody,
    disablePrimaryButton,
    buttonType,
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
                                  label={cancelButton.label || 'Close'}
                                  outline
                                  type={buttonType}
                                  onClick={e =>
                                      cancelButton && cancelButton.onClick(e)
                                  }
                              ></Button>
                              {primaryButton && (
                                  <Button
                                      label={primaryButton.label}
                                      type={buttonType}
                                      disabled={disablePrimaryButton}
                                      onClick={e =>
                                          primaryButton &&
                                          primaryButton.onClick(e)
                                      }
                                  ></Button>
                              )}
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
    disablePrimaryButton: Proptypes.bool,
    buttonType: Proptypes.oneOf(['success', 'warning', 'error', 'primary']),
    primaryButton: Proptypes.shape({
        onClick: Proptypes.func.isRequired,
        label: Proptypes.string.isRequired,
    }),
    cancelButton: Proptypes.shape({
        onClick: Proptypes.func.isRequired,
        label: Proptypes.string,
    }).isRequired,
};

Dialog.defaultProps = {
    theme,
};

export default withTheme(Dialog);
