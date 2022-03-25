import produce from 'immer';
import { JPH_ACTION_CONST } from '../../../services/const/actionConst';

const {JPH_API_CALL_ACTION, JPH_API_CALL_ACTION_FAILURE, JPH_API_CALL_ACTION_SUCCESS} = JPH_ACTION_CONST

const initState = {
  jphApiResult: {
    processing: false,
    processed: false,
    message: "",
    result: null
  },
}

export default function jphReducer(state = initState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case JPH_API_CALL_ACTION:
        draft.jphApiResult = { ...draft.jphApiResult, processing: true, processed: false, message: 'call api', result: null }
        break;
      case JPH_API_CALL_ACTION_SUCCESS:
        draft.jphApiResult = { ...draft.jphApiResult, processing: false, processed: true, message: 'successfully called api', result: action.payload }
        break;
      case JPH_API_CALL_ACTION_FAILURE:
        draft.jphApiResult = { ...draft.jphApiResult, processing: false, processed: false, message: 'unsuccessfully called api', result: action.payload }
        break;

      default:
      return state;
  }
})
}
