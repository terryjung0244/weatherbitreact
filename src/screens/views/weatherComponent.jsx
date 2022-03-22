import React from 'react'
import { cityList } from '../../cityList'
import { useSelector, useDispatch } from 'react-redux'
import { weatherReducerWeatherApiCallAction } from '../reducers/weatherAction'

const WeatherComponent = () => {

  const weatherReducerSelector = useSelector(state => state.weatherReducer)

  const dispatch = useDispatch()

  const onClickCity = (city) => {
    dispatch(weatherReducerWeatherApiCallAction(city))
  }
  
  // console.log(weatherReducerSelector.weatherApiResult.processing)
  console.log(weatherReducerSelector.weatherApiResult.result);

  return (
    <div>
      <div>
        {cityList.map((city, index) => {
          return (
            <div onClick={() => onClickCity(city)} key={city.cityName}>
              {city.cityName}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WeatherComponent

// Loading Component 넣기 (Processing 값에 따라)
// 성공적으로 api call을 했을 때, result 값을 이용해서 화면에 보여주기
// Icon => Real Icon (https://www.weatherbit.io/static/img/icons/c04d.png)
//      => <img src=`https://www.weatherbit.io/static/img/icons/...` />
// + UI

// .env

