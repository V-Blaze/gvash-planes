import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import persistedAuthReducer from './authSlice/authSlice';
import appSlice from './appSlice/appSlice';
import planesSlice from './planeSlice/planeSlice';
import planeSlice from './planeSlice/planeSlice';

const middleWares = [logger, thunk];

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  app: appSlice,
  planes: planesSlice,
  plane: planeSlice,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: middleWares,
});

const persistor = persistStore(store);

export { store, persistor };
