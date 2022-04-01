import React from 'react'
import { cityList } from '../../cityList'
import { useSelector, useDispatch } from 'react-redux'
import { weatherReducerWeatherApiCallAction } from '../reducers/weather/weatherAction'
import LoadingComponent from './reusable/LoadingComponent'

const WeatherComponent = () => {

  const weatherReducerSelector = useSelector(state => state.weatherReducer)

  const dispatch = useDispatch()

  const onClickCity = (city) => {
    dispatch(weatherReducerWeatherApiCallAction(city))
  }

  console.log(weatherReducerSelector.weatherApiResult.processing)
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
      <div>
        {(weatherReducerSelector.weatherApiResult.result !== null)
        ?
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {/* {weatherReducerSelector.weatherApiResult.result.cityWeather.desc}
            {weatherReducerSelector.weatherApiResult.result.cityTemp} */}
            <div style={{ fontWeight: 'bold', marginTop: '30px'}}>
              {weatherReducerSelector.weatherApiResult.result.cityName}
            </div>
            <div>
              Temp: {weatherReducerSelector.weatherApiResult.result.cityTemp}
            </div>
            <div>
              Desc: {weatherReducerSelector.weatherApiResult.result.cityWeather.desc}
            </div>
            <img style={{width: '100px'}} src={`https://www.weatherbit.io/static/img/icons/${weatherReducerSelector.weatherApiResult.result.cityWeather.icon}.png`} alt="weather icon" />
          </div>
        :
          null
        }
      </div>
      <div>
        {(weatherReducerSelector.weatherApiResult.processing === true)
        ?
          <LoadingComponent />
        :
          null
        }
      </div>
    </div>
  )
}

export default WeatherComponent

// + UI

// .env


// Git (Branch, Pull, Clone, Merge ....)
// Gsocks
// Portfolio 구상