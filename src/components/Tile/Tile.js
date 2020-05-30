import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Tile.scss';

const Tile = ({ value, handleClick, className }) => {
  const style = { width: '75px', height: '75px' };

  return (
    <div className={className} onClick={handleClick}>
      <div className="block-backside">
        <div className="block">
          <FontAwesomeIcon icon={value} style={style} />
        </div>
      </div>
    </div>
  );
};

export default Tile;
