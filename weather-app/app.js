const geocode = require('../weather-app/utils/geocode.js')
const forecast = require('../weather-app/utils/forecast.js')
const address = process.argv[2]

if(address==undefined){
    console.log("Please provide an address")
} else{
    geocode(address, (error, {longitude, latitude, location} = {})=>{ //destructuring of response object
        if(error){
            return console.log(error)
        }
        forecast(longitude, latitude, (error, {description, temperature, feelsLike} = {})=>{ //destructing of forecastData
            if(error){
               return console.log('Error', error)
            }
            console.log(location)
            console.log(description+": It is currently "+temperature+" degrees but it feels like "+feelsLike+" degrees outside.")
        })
    })
}
