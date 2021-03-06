import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

let sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({thunk: false, serializableCheck: false}),
  sagaMiddleware,
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export type GlobalState = ReturnType<typeof store.getState>;

export default store;
