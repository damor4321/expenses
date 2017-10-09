// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

// TODO handle loading errors when webpack v2 is stable

import { getAsyncInjectors } from 'utils/asyncInjectors';
// import auth from 'auth';


const loadModule = cb => (componentModule) => {
  cb(null, componentModule);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'expenses',
      getComponent(nextState, cb) {
        require.ensure([
          'containers/Expenses/reducer',
          'containers/Expenses/sagas',
          'containers/Expenses',
        ], (require) => {
          const renderRoute = loadModule(cb);
          injectReducer('expenses', require('containers/Expenses/reducer').default);
          injectSagas(require('containers/Expenses/sagas').default);
          renderRoute(require('containers/Expenses').default);
        });
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        require.ensure([
          'containers/NotFoundPage',
        ], (require) => {
          const renderRoute = loadModule(cb);
          renderRoute(require('containers/NotFoundPage').default);
        });
      },
    },
  ];
}
