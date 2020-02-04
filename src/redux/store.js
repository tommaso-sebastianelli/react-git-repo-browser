import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./rootReducer";
import rootSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware()

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f => f)
    ));

sagaMiddleware.run(rootSagas)