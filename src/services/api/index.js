import env from 'react-dotenv';

const fetchFunc = async (url, method, body) => {
  let apiResult = await fetch(
    `${url}`,
    {
      method: method,
      body: body
    }
  );

  apiResult = await apiResult.json();
  return apiResult;
};

export const getWeatherAPI = async (param) => {
  var url = `https://api.weatherbit.io/v2.0/current?city=${param.cityName}&country=${param.country}&key=${env.API_KEY}`;
  
  try {
    var result = await fetchFunc(url, 'GET', null);
    return result;
  } catch (err) {
    return err;
  }
} 

export const getJphAPI = async (param) => {
  var url = `https://jsonplaceholder.typicode.com/todos/${param}`;

  try {
    var result = await fetchFunc(url, 'GET', null);
    return result;
  } catch (err) {
    return err;
  }
} 

// Promise.aFunc().then((빨래) => {
//   빨래.bFunc().then((빨래2) => {
//     빨래.cFunc().then((빨래3) => {

//     }).catch((err) {

//     })
//   }).catch((err) {

//   })
// }).catch((err) {

// });
// => call back hell

// async function 세탁기들() {
//   var 빨래 = await aFunc();
//   var 빨래2 = bFunc();
//   var 빨래3 = await cFunc();
//   var 빨래4 = await dFunc();

//   // 4시간
//   // 3시간
//   return 빨래 + 빨래3 + 빨래4
//   // ....
// }