import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { resetState } from '../../reducers/tileReducer';
import UILink from '../UILink/UILink';
import './UI.scss';

export const UI = ({ links, resetState }) => {
  useEffect(() => {
    resetState();
  }, [resetState]);

  const renderedLinks = links.map((link) => (<UILink key={link.href.length * link.name.length} href={link.href} className="link-style" text={link.name} />));

  return (
    <div className="ui">
      <h1>Tile Matching Game</h1>
      <h2>Goal: match all tile-icons</h2>
      {renderedLinks}
    </div>
  );
};

export default connect(null, { resetState })(UI);
