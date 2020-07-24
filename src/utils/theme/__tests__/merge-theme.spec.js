import defaultTheme from '../index';
import { mergeTheme } from '../merge-theme';

describe('Merge Theme', () => {
    it('should return the default theme if theme is falsy value', () => {
        expect(mergeTheme()).toBe(defaultTheme);
        expect(mergeTheme(false)).toBe(defaultTheme);
        expect(mergeTheme(0)).toBe(defaultTheme);
        expect(mergeTheme('')).toBe(defaultTheme);
        expect(mergeTheme(null)).toBe(defaultTheme);
    });

    it('should use the provided theme by default and fallback to default values', () => {
        const theme = {
            error: Object('red'),
            primary: Object('blue'),
        };

        const mergedTheme = mergeTheme(theme);

        expect(mergedTheme).toHaveProperty('primary', theme.primary);
        expect(mergedTheme).toHaveProperty('error', theme.error);
        // Defaulted to default theme
        expect(mergedTheme).toHaveProperty('success', defaultTheme.success);
        expect(mergedTheme).toHaveProperty('warning', defaultTheme.warning);
    });

    it('should ignore other keys', () => {
        const badKey = 'iAmABadKey';
        const theme = {
            [badKey]: Object('red'),
        };

        const mergedTheme = mergeTheme(theme);

        expect(mergedTheme).not.toHaveProperty(badKey);
    });
});
