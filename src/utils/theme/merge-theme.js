import defaultTheme from './index';

export const mergeTheme = userDefinedTheme =>
    userDefinedTheme
        ? Object.keys(defaultTheme).reduce((acc, key) => {
              const theme = userDefinedTheme[key] || defaultTheme[key];

              acc[key] = theme;

              return acc;
          }, {})
        : defaultTheme;
