import { combineReducers } from "redux";
import weatherReducer from "../../screens/reducers/weather/weatherReducer";
import jphReducer from "../../screens/reducers/jph/jphReducer";

export default combineReducers({
  weatherReducer,
  jphReducer
});

// combineReducer = rootReducer