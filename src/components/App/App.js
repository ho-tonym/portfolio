import React, {lazy, Suspense} from 'react';
import { MyProvider } from '../../MyProvider.js'
import { BrowserRouter as Router } from 'react-router-dom'
import TransitionOverlay from '../TransitionOverlay'
import SlowScroll from "../home/SlowScroll"
import styles from './App.module.css'
import {preloaderAnim} from '../utils'
const FixedUI = lazy(() => import("../FixedUI"))
const OverlayNav = lazy(() => import("../overlayNav"))
const Routes = lazy(() => (
  Promise.all([
    import("./routes"),
    new Promise(resolve => setTimeout(resolve, preloaderAnim))
  ])
  .then(([moduleExports]) => moduleExports)
))

function App() {
  return (
    <MyProvider>
      <Router>
        <Suspense
          fallback={(
            <div className={styles.preloader}>
              <h1>TONY HO</h1>
            </div>
          )}>
          <FixedUI />
          <OverlayNav />
          <Routes />
            {/*<SlowScroll />*/}
            {/*<TransitionOverlay />*/}
        </Suspense>
      </Router>
    </MyProvider>
  );
}

export default App;
