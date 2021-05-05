import React from 'react';
import { Router } from '@reach/router';

import Home from './Home';
import Num from './Num';
import Word from './Word';
import Color from './Color';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Num path="/:number" />
        <Word path="/:entry" />
        <Color path="/:word/:text/:bg" />
      </Router>
    </div>
  );
}

export default App;
