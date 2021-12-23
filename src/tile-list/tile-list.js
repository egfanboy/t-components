import React from 'react';
import { withTheme } from 'styled-components';
import theme from '../utils/theme';
import { mergeTheme } from '../utils/theme/merge-theme';
import { Container, Tile, Title, Description } from './tile-list.styled';

export const TileList = withTheme(props => {
    const onTileClick = tile => () =>
        props.onTileClick && props.onTileClick(tile);

    const theme = mergeTheme(props.theme);

    if (!props.items) return null;

    return (
        <Container>
            {props.items.map(item => (
                <Tile key={item.key} theme={theme} onClick={onTileClick(item)}>
                    <Title theme={theme}>{item.title}</Title>
                    {
                        <Description theme={theme}>
                            {item.description}
                        </Description>
                    }
                </Tile>
            ))}
        </Container>
    );
});

TileList.defaultProps = {
    theme,
};
