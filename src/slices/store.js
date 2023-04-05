import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import persistedAuthReducer from './authSlice/authSlice';
import appSlice from './appSlice/appSlice';
import planesSlice from './planeSlice/planeSlice';

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  app: appSlice,
  planes: planesSlice,
});
const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
