import { takeLatest, put, select } from "redux-saga/effects";
import { WEATHER_ACTION_CONST } from "../../../services/const/actionConst";
import { weatherReducerWeatherApiCallActionSuccess, weatherReducerWeatherApiCallActionFailure } from "./weatherAction";
import { getWeatherAPI } from '../../../services/api';
const { WEATHER_API_CALL_ACTION } = WEATHER_ACTION_CONST;


const addDelay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000)
  })
};

//d46fe6f3b2e44fb8b52873c21312b71f
//https://api.weatherbit.io/v2.0/current?city=""&country=""&key=""
//GET

function* getApiResult (action) {
  yield addDelay();
  try {
    let apiResult = yield getWeatherAPI(action.payload);

    // console.log(apiResult.data[0].city_name);
    let organizedData = {
      cityName: apiResult.data[0].city_name,
      cityTemp: apiResult.data[0].temp,
      cityWeather: {
        icon: apiResult.data[0].weather.icon,
        desc: apiResult.data[0].weather.description
      }
    }

    // check point 2
    yield put(weatherReducerWeatherApiCallActionSuccess(organizedData));
  } catch (err) {
    console.log(err);
    yield put(weatherReducerWeatherApiCallActionFailure(err));
  }
}

export function* weatherSagaWatcher() {
  yield takeLatest (WEATHER_API_CALL_ACTION, getApiResult)
}
