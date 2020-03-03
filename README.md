# weather-widget WebComponent
`weather-widget` WebComponent that pulls weather data from OpenWeather API https://openweathermap.org/api

## Quick Start
```
yarn install
```
To run the local development server the following command will also open the HTML in a browser window:
```
yarn start
```
## Use `weather-widget` in your project
This WebComponent is also hosted on https://bit.dev/polad/calgaryjs/weather-widget so you can use it as follows.
1) Add the component as a dependency to your project:
   ```
   yarn add @bit/polad.calgaryjs.weather-widget
   ```
2) Import the component in your JavaScript code:
   ```javascript
   import '@bit/polad.calgaryjs.weather-widget';
   ```
3) Use the WebComponent in your HTML files as a custom HTML tag:
   ```html
     <weather-widget
       appid={YOUR_OPEN_WEATHER_API_APPID}
       city="Calgary"
       units="metric"
       />
   ```

## Library that was used to create this WebComponent
`hybrids` is a small UI library for creating Web Components from plain objects and pure functions:
https://github.com/hybridsjs/hybrids
