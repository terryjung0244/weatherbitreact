import produce from 'immer';
import { WEATHER_ACTION_CONST } from "../../services/const/actionConst";

const { WEATHER_API_CALL_ACTION, WEATHER_API_CALL_ACTION_SUCCESS, WEATHER_API_CALL_ACTION_FAILURE } = WEATHER_ACTION_CONST;

const initState = {
  weatherApiResult: {
    processing: false,
    processed: false,
    message: "",
    result: null
  },

}

export default function weatherReducer(state = initState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case WEATHER_API_CALL_ACTION: 
      // check point 1
      draft.weatherApiResult = { ...draft.weatherApiResult, processing: true, processed: false, message: 'call api', result: null }
      // draft.weatherApiResult.processing = true;
      // draft.weatherApiResult.processed = true;
      break;
      case WEATHER_API_CALL_ACTION_SUCCESS:
        draft.weatherApiResult = { ...draft.weatherApiResult, processing: false, processed: true, message: 'successfully called api', result: action.payload }
        break;
      case WEATHER_API_CALL_ACTION_FAILURE:
        draft.weatherApiResult = { ...draft.weatherApiResult, processing: false, processed: false, message: 'unsuccessfully called api', result: action.payload }
        break;
      default:
      return state;
  }
})
}
