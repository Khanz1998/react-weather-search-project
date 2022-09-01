[Click here for a live demo](https://weather-wise.netlify.app/).

<img width="500" alt="mockup-weather" src="https://user-images.githubusercontent.com/92318870/187888762-5b20032a-163a-48ad-a35f-90a331033e58.png">


# Weather App

This is a React.js project focused on creating a fully functional live app that displays the weather and a 5-day forecast for the searched city.

## Installation and Set-up Instructions

Clone down this repository you will need `node` and `npm` installed globally on your machine.

### Installation
`npm install`

### To Start Server
`npm start`

## Reflection

- API Integration
- Daily Forecast
- React Components
- React Loops 
- React Hooks 

This was my first React project and I learned so much by building each section. I divided this project in two phases. 

#### Phase 1
The first phase was creating the weather search by integrating the OpenWeatherMap API and returning the real-time, current weather of a chosen city, as well as the weather description, humidity, and wind speed. The main challenge of this phase was deciding when to create different components as to not over complicate their functionality.

#### Phase 2
The second phase was dedicated to creating the daily forecast by building the layout, styling the feature, and integrating the API with the interface to display the data on the app, making sure it looks good for different scenarios. In this phase, I learned to loop through the numbers array using the JavaScript map() function to take care of rendering the daily forecast for the consecutive dates in order to avoid repetitive code.
