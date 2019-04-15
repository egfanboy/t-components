import React from 'react';

import PropTypes from 'prop-types';

import { StyledIcon } from './icon.styled';

function Icon(props) {
    const { icon, className, size, onClick } = props;

    function handleIconClick(event) {
        event.stopPropagation();

        onClick && onClick(event.target);
    }

    return (
        <StyledIcon
            className={`material-icons ${className}`}
            size={size}
            onClick={handleIconClick}
        >
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
