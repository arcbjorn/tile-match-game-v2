import { getRandomInt, getValue } from '../utils/Helper';

export const initialState = {
  tiles: [],
  matchedTiles: [],
  selectedTiles: [],
  difficulty: 2,
};

const tileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_TILES':
      return {
        ...state,
        difficulty: action.payload.difficulty,
        tiles: action.payload.tiles,
      };
    case 'TILE_SELECTED': {
      const selected = state.selectedTiles.concat(
        state.tiles.filter((tile) => tile.x === action.payload.x && tile.y === action.payload.y),
      );

      if (selected.length === 2) {
        if (selected[0].value === selected[1].value) {
          const matched = state.matchedTiles.concat(selected);

          if (matched.length === state.tiles.length) {
            return {
              ...state,
              tiles: [],
              selectedTiles: [],
              matchedTiles: [],
            };
          }

          return {
            ...state,
            matchedTiles: matched,
            selectedTiles: [],
          };
        } if (action.payload.x === -1 && action.payload.y === -1) {
          return {
            ...state,
            selectedTiles: [],
          };
        }
        return {
          ...state,
          selectedTiles: selected,
        };
      } if (selected.length > 2) {
        return {
          ...state,
          selectedTiles: [],
        };
      }
      return {
        ...state,
        selectedTiles: selected,
      };
    }

    case 'RESET_STATE':
      return initialState;
    default:
      return state;
  }
};

export const initializeTiles = (difficulty) => (dispatch) => {
  const tiles = [];
  let values = [];
  const uniqRandoms = [];
  let max;

  if (difficulty <= 3 && difficulty >= 2) {
    max = difficulty * 2;
  } else {
    max = 6;
    difficulty = 3;
  }

  for (let i = 0; i < max * difficulty; i++) {
    let random;

    do {
      // 31 - max index of tileIcons for icon names
      random = getRandomInt(0, 31);
    } while (uniqRandoms.indexOf(random) !== -1);

    values.push(random);
    uniqRandoms.push(random);
  }

  values = values.concat(values);
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < max; j++) {
      tiles.push({ x: i, y: j, value: getValue(values) });

      values.splice(values.indexOf(tiles[tiles.length - 1].value), 1);
    }
  }

  dispatch({
    type: 'INIT_TILES',
    payload: {
      difficulty,
      tiles,
    },
  });
};

export const select = (x, y) => ({
  type: 'TILE_SELECTED',
  payload: {
    x, y,
  },
});

export const selectAfterTimeout = (x, y, timeout) => (dispatch) => {
  setTimeout(() => {
    dispatch(select(x, y));
  }, timeout);
};

export const resetState = () => ({
  type: 'RESET_STATE',
});

export default tileReducer;
