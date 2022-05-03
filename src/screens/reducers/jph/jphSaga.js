import { takeLatest, put, select } from "redux-saga/effects";
import { getJphAPI } from "../../../services/api";
import { JPH_ACTION_CONST } from "../../../services/const/actionConst"
import { jphReducerJphApiCallActionSuccess, jphReducerJphApiCallActionFailure } from './jphAction';
const {JPH_API_CALL_ACTION} = JPH_ACTION_CONST


const addDelay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000)
  })
};

function* getApiResult (action) {
  yield addDelay();
  try {
    let apiResult = yield getJphAPI(action.payload);
    console.log(apiResult);
    yield put(jphReducerJphApiCallActionSuccess(apiResult));
  } catch (err) {
    console.log(err);
    yield put(jphReducerJphApiCallActionFailure(err));
  }
}

export function* jphSagaWatcher() {
  // yield takeLatest (WEATHER_API_CALL_ACTION, getApiResult)
  yield takeLatest (JPH_API_CALL_ACTION, getApiResult)
}
