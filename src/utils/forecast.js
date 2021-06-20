const request = require("request")



const forecast = (latitude, longitude, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=f810c867708c197964e15edaca61604d&query=' + encodeURIComponent(longitude) + ',' + encodeURIComponent(latitude) + '&units=f'
request({url, json: true}, (error, {body}) => {
    if (error) {
        console.log("Unable to connect to weather service.")
    } else if (body.error) {
        console.log('Unable to find location')
    } else {
        const forecastString = body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out.  It feels like " + body.current.feelslike + " degrees out.  The humidity is " + body.current.humidity
        callback(undefined, 
        forecastString
        )
    }
})
}



module.exports = forecast 

