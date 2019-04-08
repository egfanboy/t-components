import React from 'react';

import PropTypes from 'prop-types';

import { StyledIcon } from './icon.styled';

function Icon(props) {
    const { icon, className, size } = props;

    return (
        <StyledIcon className={`material-icons ${className}`} size={size}>
            {icon}
        </StyledIcon>
    );
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(['large', 'medium', 'small']),
};

Icon.defaultProps = {
    size: 'small',
    className: '',
};

export default Icon;
