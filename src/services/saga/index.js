import { all } from 'redux-saga/effects';
import { weatherSagaWatcher } from '../../screens/reducers/weather/weatherSaga';
import { jphSagaWatcher } from '../../screens/reducers/jph/jphSaga';


export default function* rootSaga() {
  yield all([
    weatherSagaWatcher(),
    jphSagaWatcher()
  ])
};