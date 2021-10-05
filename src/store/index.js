import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const rootReducer = combineReducers({});

let enhancer;

if (process.env.NODE_ENV !== 'production'){
    const logger = require('redux-logger').default;
    const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(logger))
}




const configureStore = (preLoadedState) => {
    return createStore(rootReducer, preLoadedState, enhancer)
}

export default configureStore;
