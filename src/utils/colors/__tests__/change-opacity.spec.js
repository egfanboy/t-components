import changeOpacity from '../change-opacity';

describe('changeOpacity', () => {
    it('should add the proper opacity hex code', () => {
        const color = '#ff9926';
        const opacity = 0.7;
        const opacityHex = Math.round(255 * opacity).toString(16);

        expect(changeOpacity(color, opacity)).toEqual(`${color}${opacityHex}`);
    });

    it('should just return the color if it is an rgba color', () => {
        const color = 'rgba(0,0,0,0.8)';

        expect(changeOpacity(color, 0.8)).toEqual(color);
    });

    it('should just convert and return proper color if it is an rgb color', () => {
        const colorRGB = 'rgb(255, 153, 38)';
        const colorHex = '#ff9926';
        const opacity = 0.7;
        const opacityHex = Math.round(255 * opacity).toString(16);

        expect(changeOpacity(colorRGB, opacity)).toEqual(
            `${colorHex}${opacityHex}`
        );
    });
});
