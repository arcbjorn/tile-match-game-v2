import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './BackButton.scss';

export const BackButton = ({ history, location }) => (
  <div className="back-button">
    {
      location.pathname === '/'
        ? <></>
        : (
          <button type="button" onClick={() => history.goBack()}>
            <FontAwesomeIcon icon={faArrowCircleLeft} style={{ width: '7rem', height: '7rem' }} />
          </button>
        )
    }

  </div>
);

export default withRouter(BackButton);
