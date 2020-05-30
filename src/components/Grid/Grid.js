import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Tile from '../Tile/Tile';
import './Grid.scss';

export const Grid = ({
  tiles, matchedTiles, selectedTiles, difficulty, select, tileIcons,
  stateUpdated, selectAfterTimeout,
}) => {
  const [renderedContent, setRenderedContent] = useState([]);
  const [style, setStyle] = useState({});
  const [prevSelected, setPrevSelected] = useState([]);

  useEffect(() => {
    setRenderedContent(
      tiles.length === 0 && stateUpdated ? <Redirect to="/" /> : tiles.map((tile, index) => {
        let tileClass = (matchedTiles.includes(tile)
          ? 'tile matched'
          : (selectedTiles.includes(tile) ? 'tile selected'
            : (prevSelected.includes(tile) ? 'tile to-hide' : 'tile')));

        const handleClick = matchedTiles.includes(tile) || selectedTiles.includes(tile) ? () => { }
          : () => {
            select(tile.x, tile.y);
            let prev = prevSelected.concat(tile);

            if (prev.length > 2) {
              prev = prev.slice(2);
            }

            setPrevSelected(prev);

            if (prev.length === 2) {
              if (prev[0].value !== prev[1].value) {
                tileClass = 'tile to-hide';
                selectAfterTimeout(-1, -1, 500);
              }
            }
          };

        return (
          <Tile
            key={tile.value * index + difficulty + index}
            value={tileIcons[tile.value]}
            handleClick={handleClick}
            className={tileClass}
          />
        );
      }),
    );

    let gridForDifficulty = '';

    for (let i = 0; i < difficulty * 2; i++) {
      gridForDifficulty += `${(100 / (difficulty * 2)).toFixed(2)}% `;
    }

    setStyle({
      gridTemplateColumns: gridForDifficulty,
      gridTemplateRows: gridForDifficulty,
    });

    return () => {
      if (prevSelected.length >= 2) {
        setPrevSelected([]);
      }
    };
  // eslint-disable-next-line
  }, [tiles, selectedTiles, matchedTiles]);


  return (
    <div className="tile-collection" style={style}>
      {renderedContent}
    </div>
  );
};

export default Grid;
