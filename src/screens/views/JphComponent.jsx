import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { jphReducerJphApiCallAction } from '../reducers/jph/jphAction';

const JphComponent = () => {

  const jphReducerSelector = useSelector(state => state.jphReducer);
  const dispatch = useDispatch();

  const onClickJph = async () => {
    dispatch(jphReducerJphApiCallAction(1));
  }

  console.log(jphReducerSelector.jphApiResult.result);

  return(
    <div>
      <div onClick={onClickJph}>
        Button
      </div>
    </div>
  )
};

export default JphComponent;