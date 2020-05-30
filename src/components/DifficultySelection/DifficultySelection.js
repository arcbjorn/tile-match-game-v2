import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { resetState } from '../../reducers/tileReducer';
import UILink from '../UILink/UILink';
import './DifficultySelection.scss';

export const DifficultySelection = ({ difficultyList, resetState }) => {
  useEffect(() => {
    resetState();
  }, [resetState]);

  const renderedLinks = difficultyList.map((difficulty, index) => (
    <UILink
      key={difficulty.value * difficulty.name.length + index}
      href={`/game/${difficulty.value}`}
      text={difficulty.name}
      className="link-style"
    />
  ));


  return (
    <div className="difficulty-select">
      {renderedLinks}
    </div>
  );
};

export default connect(null, { resetState })(DifficultySelection);
