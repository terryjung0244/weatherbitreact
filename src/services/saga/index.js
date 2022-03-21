import { all } from 'redux-saga/effects';
import { weatherSagaWatcher } from '../../screens/reducers/weatherSaga';

export default function* rootSaga() {
  yield all([
    weatherSagaWatcher()
  ])
};