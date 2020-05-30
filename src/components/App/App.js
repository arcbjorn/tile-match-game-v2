import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAmbulance, faAnchor, faBabyCarriage, faBath, faBed, faBeer, faBell, faBicycle,
  faBinoculars, faBomb, faBook, faBug, faBus, faCamera, faCandyCane, faCar,
  faCloud, faDrum, faFeather, faGuitar, faHeadphones, faHeart, faHelicopter, faKey,
  faLightbulb, faLock, faMoon, faRocket, faTv, faUmbrella, faStar, faWrench,
} from '@fortawesome/free-solid-svg-icons';
import Board from '../Board/Board';
import UI from '../UI/UI';
import DifficultySelection from '../DifficultySelection/DifficultySelection';
import About from '../About/About';
import BackButton from '../BackButton/BackButton';
import { tileIcons } from '../../utils/Helper';
import './App.scss';

const App = ({ history = null }) => {
  library.add(faAmbulance, faAnchor, faBabyCarriage, faBath, faBed, faBeer, faBell, faBicycle,
    faBinoculars, faBomb, faBook, faBug, faBus, faCamera, faCandyCane, faCar,
    faCloud, faDrum, faFeather, faGuitar, faHeadphones, faHeart, faHelicopter, faKey,
    faLightbulb, faLock, faMoon, faRocket, faTv, faUmbrella, faStar, faWrench);

  const links = [{ href: '/game/difficulty/choose', name: ' · Play! · ' }, { href: '/about', name: ' · About the game · ' }];
  const difficultyList = [{ value: 2, name: ' · Normal difficulty · ' }, { value: 3, name: ' · Test yourself! · ' }];

  return (
    <div className="app">
      <Router>
        <BackButton browserHistory={history} />
        <Route exact path="/" render={() => <UI links={links} />} />
        <Route exact path="/game/:difficulty" render={({ match }) => <Board difficulty={match.params.difficulty} tileIcons={tileIcons} />} />
        <Route exact path="/game/difficulty/choose" render={() => <DifficultySelection difficultyList={difficultyList} />} />
        <Route path="/about" render={() => <About />} />
      </Router>
    </div>
  );
};

export default App;
