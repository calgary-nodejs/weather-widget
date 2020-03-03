import axios from 'axios';
import { html, define } from 'hybrids';

const renderUnits = (units) =>
  units === 'imperial' ? html`&#8457;` : html`&#8451;`;

const renderTemp = (temp, units) =>
  html`${Math.round(temp)}${renderUnits(units)}`;

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const renderWeatherData = (units) => (data) => html`
  <div>${renderTemp(data.main.temp, units)}</div>
  <div>feels like ${renderTemp(data.main.feels_like, units)}</div>
  <img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>
  <div>${capitalize(data.weather[0].description)}</div>
`;

const fetchWeatherData = (params) => axios.get(
  'https://api.openweathermap.org/data/2.5/weather',
  { params }
).then(({ data }) => data);

const WeatherWidget = {
  appid: '',
  city: '',
  units: 'metric',
  weatherData: ({ appid, city, units }) => fetchWeatherData({ appid, q: city, units }),
  render: ({ city, units, weatherData }) => html`
    <div>${city}</div>
    ${html.resolve(weatherData.then(renderWeatherData(units)))}
  `,
};

define('weather-widget', WeatherWidget);
