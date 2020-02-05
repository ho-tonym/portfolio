import React from 'react';
import Routes from './routes'
import { MyProvider } from '../../MyProvider.js'
import { BrowserRouter as Router } from 'react-router-dom'
import OverlayNav from '../overlayNav'
import TransitionOverlay from '../TransitionOverlay'
import SlowScroll from "../home/SlowScroll"

function App() {
  return (
    <MyProvider>
      <Router>

        <OverlayNav />
        {/*<SlowScroll />*/}
        {/*<TransitionOverlay />*/}
        <Routes />
      </Router>
    </MyProvider>
  );
}

export default App;
