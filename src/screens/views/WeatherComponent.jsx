import React from 'react'
import { cityList } from '../../cityList'
import { useSelector, useDispatch } from 'react-redux'
import { weatherReducerWeatherApiCallAction } from '../reducers/weather/weatherAction'
import LoadingComponent from './reusable/LoadingComponent'
import { makeStyles } from '@material-ui/core/styles'
import Image from './css/image/sky.jpg'
import Grid from '@material-ui/core/Grid';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wholeContainer: {
    backgroundImage: `url(${Image})`,
    // border: '1px solid green',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
    
  },
  cityMainContainer: {
    // color: 'white',
    color: '#EE9D73',
    fontSize: '50px',
    fontWeight: '500',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    // border: '1px solid red',
    height: '200px',
    // marginTop: '40%',
  },
  cityContainer: {
    // border: '1px solid blue',
    // paddingTop: '40px',
    // color: '#EE9D73',


  },
  // cityContainerToronto: {
  //   color: 'red'
  // },
  // cityContainerMontreal: {
  //   color: 'blue'
  // },
  // cityContainerOrlando: {
  //   color: 'green'
  // },
  weatherContainer: {
    // border: '1px solid yellow',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    color: 'white',
    fontWeight: '550'
    
  },
  borderStyle: {
    border: '2px solid yellow',
    color: '#fff'
  },
  eachCityContainer: {
    border: '1px solid red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0',
    [theme.breakpoints.down('md')]: {
      fontSize: '10px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '100px'
    },
  }
}));

const WeatherComponent = () => {

  const classes = useStyles();

  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up('md'));

  const weatherReducerSelector = useSelector(state => state.weatherReducer)

  const dispatch = useDispatch()

  const onClickCity = (city) => {
    dispatch(weatherReducerWeatherApiCallAction(city))
  }

  // console.log(matches);

  // console.log(weatherReducerSelector.weatherApiResult.processing)
  // console.log(weatherReducerSelector.weatherApiResult.result);
  
  return (
    <div className={classes.wholeContainer}>
      <div className={classes.cityMainContainer} >
      <Grid container>
        {cityList.map((city, index) => {
          return (
              <Grid key={city.cityName} item xs={12} sm={6} md={4} className={classes.eachCityContainer}>
              <div className={classes.tempCityName} onClick={() =>     onClickCity(city)} key={city.cityName}>
              {city.cityName}
              </div>
              </Grid>
            
          )
        })}
      </Grid>
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
      {/* <Grid container>
        <Grid item sm={3} md={6} className={classes.borderStyle}>
          hello
        </Grid>
        <Grid item sm={4} md={6} className={classes.borderStyle}>
          hello
        </Grid>
        <Grid item sm={6} md={6} className={classes.borderStyle}>
          hello
        </Grid>
      </Grid> */}

      {}
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
