import React from 'react'
import WeatherComponent from './screens/views/WeatherComponent'
import JphComponent from './screens/views/JphComponent';
import TempComponent from './screens/views/TempComponent';


const App = () => {

  return (
    <div>
      <WeatherComponent/>
      {/* <JphComponent/> */}
      <TempComponent/>
    </div>
  )
}

export default App
