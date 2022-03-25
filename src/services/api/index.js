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
  var url = `https://api.weatherbit.io/v2.0/current?city=${param.cityName}&country=${param.country}&key=d46fe6f3b2e44fb8b52873c21312b71f`;

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
