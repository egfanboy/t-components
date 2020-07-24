import PropTypes from 'prop-types';

export const ThemePropType = PropTypes.shape({
    primary: PropTypes.object,
    error: PropTypes.object,
    warning: PropTypes.object,
    success: PropTypes.object,
});
