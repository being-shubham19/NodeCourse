const request = require('request')
const forecast = (longitude, latitude, callback)=>{
    const url = "http://api.weatherstack.com/current?access_key=cec75ce35494f7b84820862234399474&query="+longitude+","+latitude
    request({url, json: true}, (error,{body})=>{ //url directly is actually object shorthand & {body} is destructuring of response object
        if(error){
            callback("Unable to connect to the server!", undefined)
        } else if(body.error){
            callback("Location not found, try another search!", undefined)
        } else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelsLike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast