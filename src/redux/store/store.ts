import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {setAuthentication, setRecordsPerPage} from '../actions/actions';

const combiner = combineReducers({
  authentication: setAuthentication,
  recordsperpage: setRecordsPerPage,
});

const store = configureStore({
  reducer: combiner,
});

export default store;
