import React from 'react';
import Loadable from 'react-loadable'

function Loading() {
  return <div>Loading...</div>;
}

const Flip = Loadable({
  loader: () => import('./views/Master/Flip'),
  loading: Loading,
});

const FlipSearchByName = Loadable({
  loader: () => import('./views/Master/FlipSearchByName'),
  loading: Loading,
});


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/master/flip', exact: true, name: 'Flip', component: Flip},
  { path: '/master/flipSearchByName', exact: true, name: 'FlipSearchByName', component: FlipSearchByName}
];

export default routes;
