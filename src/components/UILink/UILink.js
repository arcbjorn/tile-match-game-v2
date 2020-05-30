import React from 'react';
import { Link } from 'react-router-dom';
import './UILink.scss';

const UILink = ({ href, text, className }) => (
  <div className={`ui-link ${className}`}>
    <Link to={href}>
      {text}
    </Link>
  </div>
);

export default UILink;
