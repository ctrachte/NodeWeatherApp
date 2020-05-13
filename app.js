// Following tutorial from:
// https://ngpec.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728910#overview

// Lesson 6.31
// console.log('Starting ...')

// setTimeout(() => {
//     console.log('2 Second Timer Popped!')
// }, 2000)

// setTimeout(() => {
//     console.log('Immediate Timer Popped!')
// }, 0)

// console.log('Stopping ...')


// Lesson 6.32, WeatherStack API
const request = require('postman-request')
let long = '-92.016712'
let lat =  '34.957049'
const units = 'f'
const WeatherStackTokenID = '89cc5db32cd40ec478c4b603d3ec4460'

let weatherUrl = `http://api.weatherstack.com/current?access_key=${WeatherStackTokenID}&query=${lat},${long}&units=${units}`

request({ url: weatherUrl, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to WeatherStack Service")
    } else {
        let data = response.body.current
        let message = data.weather_descriptions[0] + ". It is currently " + data.temperature + "F but it feels like " + data.feelslike + "F."
        console.log(message)
    }
})

// Lesson 6.33, Geocaching API
// User input address -> get Lat/Long -> get weather
const searchTerm = ""
const MapBoxTokenID = "pk.eyJ1IjoiY3RyYWNodGUiLCJhIjoiY2pvYTlidHhjMGQxczNvbjBsMGNhaW95NCJ9.4ffU0qr3uXMd3kO8unKRTQ"
const mapBoxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=" + MapBoxTokenID + "&limit=1"

request({ url: mapBoxURL, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to MapBox Service!")
    } else {
        long = response.body.features[0].center[1]
        lat = response.body.features[0].center[0]
        console.log(lat, long)
    }
})
