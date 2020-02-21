import React from 'react';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Home from '../home'
import EachProjectPage from '../EachProjectPage'
import Page404 from '../page404'

const routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'Donuts',
    path: '/projects/donuts',
    exact: true,
    component: EachProjectPage,
  },
  {
    name: 'Pokedex',
    path: '/projects/pokedex',
    exact: true,
    component: EachProjectPage,
  },
  {
    name: 'Sort',
    path: '/projects/visualizer',
    exact: true,
    component: EachProjectPage,
  },
  {
    name: 'Page404',
    component: Page404,
  },
];

const Routes = () => (
  <Switch>
    {routes.map(route => (
      <Route
        key={route.name}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    ))}
  </Switch>
)

export default Routes;
