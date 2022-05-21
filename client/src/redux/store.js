import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools }          from 'redux-devtools-extension'
import { createLogger }                 from 'redux-logger';
import thunk                            from 'redux-thunk';
import reducers                         from './reducers';

const logger = createLogger({ collapsed: true, });

const middlewares = [thunk, logger]

const rootReducer = (state, action) => reducers(state, action);

const storeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

/**
 * @type {Store<any> & {dispatch: any}}
 */
const store = createStore(rootReducer, {}, storeEnhancers);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    console.log('reducer replacing');
    const nextReducer = require('./reducers').default;
    store.replaceReducer(nextReducer)
  })
}

export { store }
