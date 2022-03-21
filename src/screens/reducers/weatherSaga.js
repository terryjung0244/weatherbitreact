import { takeLatest, put, select } from "redux-saga/effects";


const addDelay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000)
  })
};

function* getApiResult (action) {
  // let apiResult = yield fetch(`https://jsonplaceholder.typicode.com/todos/${action.payload}`);
  // apiResult = yield apiResult.json();
  // // 무조건 성공이라 가정 (no need to put try & catch)

  // console.log(apiResult);

  // yield addDelay();

  // yield put(jphReducerGetApiResultSuccess(apiResult));
}

export function* weatherSagaWatcher() {
  // yield takeLatest (GET_API_RESULT, getApiResult);
}
