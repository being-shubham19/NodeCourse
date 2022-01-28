const request = require('request')
const geocode = (address, callback)=>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" +encodeURIComponent(address)+ ".json?access_token=pk.eyJ1IjoiYWJpZ3RoaW5nMTkiLCJhIjoiY2t5a2pvem51MjI2ajJ1cXA1Mmc5emRpaSJ9.YsNelGfl4u0q0ikZ5uCZsQ&limit=1"
    request({url, json: true}, (error, {body})=>{  //{body} is destructuring of response
        if(error){
            callback('Unable to connect to location services', undefined)
        } else if(body.features.length == 0) {
            callback('Unable to find the location, try another search!', undefined)
        }else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode