import React, {lazy, Suspense} from 'react';
import { MyProvider } from '../../MyProvider.js'
import { BrowserRouter as Router } from 'react-router-dom'
import TransitionOverlay from '../TransitionOverlay'
import { preloaderAnim } from '../utils'
import Preloader from './Preloader'

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
          <TransitionOverlay />
        <Suspense
          fallback={(
            <Preloader />
          )}
        >
          <FixedUI />
          <OverlayNav />
          <Routes />
        </Suspense>
      </Router>
    </MyProvider>
  );
}

export default App;
