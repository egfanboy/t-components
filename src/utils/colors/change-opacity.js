const Opacity = (color, opacity) => {
    if (color.includes('rgba')) return color;
    const opc = Math.round(255 * opacity).toString(16);
    if (color.includes('rgb')) {
        const rgbValues = color
            .match(/\((.*?)\)/g)[0]
            .replace(/\(|\)/g, '')
            .split(',');

        return `#${rgbValues
            .map(v =>
                Number(v)
                    .toString(16)
                    .padStart(2, '0')
            )
            .join('')}${opc}`;
    }

    return `${color}${opc}`;
};

export default Opacity;
