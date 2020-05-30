import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { select, initializeTiles, selectAfterTimeout } from '../../reducers/tileReducer';
import Grid from '../Grid/Grid';
import './Board.scss';

export const Board = ({
  tiles, matchedTiles, selectedTiles, difficulty, select,
  initializeTiles, tileIcons, selectAfterTimeout,
}) => {
  const [stateUpdated, setStateUpdated] = useState(false);

  useEffect(() => {
    initializeTiles(difficulty);
    setStateUpdated(true);
  }, [difficulty, initializeTiles]);

  return (
    <div className="board">
      <Grid
        stateUpdated={stateUpdated}
        tiles={tiles}
        matchedTiles={matchedTiles}
        selectedTiles={selectedTiles}
        select={select}
        difficulty={difficulty}
        tileIcons={tileIcons}
        selectAfterTimeout={selectAfterTimeout}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  state = state.tileReducer;
  return {
    tiles: state.tiles,
    matchedTiles: state.matchedTiles,
    selectedTiles: state.selectedTiles,
  };
};

const mapDispatchToProps = {
  select,
  initializeTiles,
  selectAfterTimeout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
