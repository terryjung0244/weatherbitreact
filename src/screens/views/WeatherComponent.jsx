import React from 'react'
import { cityList } from '../../cityList'
import { useSelector, useDispatch } from 'react-redux'
import { weatherReducerWeatherApiCallAction } from '../reducers/weather/weatherAction'
import LoadingComponent from './reusable/LoadingComponent'
import { makeStyles, Grid } from '@material-ui/core/styles'
import Image from './css/image/sky.jpg'

const useStyles = makeStyles({
  wholeContainer: {
    backgroundImage: `url(${Image})`,
    border: '1px solid green',
    height: '100vh',
    
  },
  cityMainContainer: {
    color: 'white',
    fontSize: '50px',
    fontWeight: '500',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    // border: '1px solid red',
    height: '200px',
    marginTop: '40%',
    
  },
  cityContainer: {
    // border: '1px solid blue',
    paddingTop: '40px',
    color: '#EE9D73'

  },
  weatherContainer: {
    // border: '1px solid yellow',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    color: 'white',
    fontWeight: '550'
    
  }
})

const WeatherComponent = () => {

  const classes = useStyles();

  const weatherReducerSelector = useSelector(state => state.weatherReducer)

  const dispatch = useDispatch()

  const onClickCity = (city) => {
    dispatch(weatherReducerWeatherApiCallAction(city))
  }

  console.log(weatherReducerSelector.weatherApiResult.processing)
  console.log(weatherReducerSelector.weatherApiResult.result);
  
  return (
    <div className={classes.wholeContainer}>
      <div className={classes.cityMainContainer} >
        {cityList.map((city, index) => {
          return (

            <div className={classes.cityContainer} onClick={() => onClickCity(city)} key={city.cityName}>
              {city.cityName}
            </div>
          )
        })}
      </div>
      <div>
        {(weatherReducerSelector.weatherApiResult.result !== null)
        ?
          <div className={classes.weatherContainer}>
            {/* {weatherReducerSelector.weatherApiResult.result.cityWeather.desc}
            {weatherReducerSelector.weatherApiResult.result.cityTemp} */}
            <div>
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