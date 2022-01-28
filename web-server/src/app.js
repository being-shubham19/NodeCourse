const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Define paths for express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '/templates/views')
const partialsPath = path.join(__dirname, '/templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve 
app.use(express.static(publicDir))


app.get('', (req, res)=>{
    res.render('index', {
        title: "Weather",
        city: "Rupnagar",
        name: "Shubham Chaudhary"
    })
})

app.get('/about', (req,res)=>{
    res.render('about', {
        title: "About Me",
        name: "Shubham Chaudhary"
    })
})

app.get('/help', (req,res)=>{
    res.render('help', {
        message: "I need help in EXPRESS.js",
        title: "Help Me!",
        name: "Shubham Chaudhary"
    })
})

app.get('/help/*', (req, res)=>{
    res.render('error', {
        title: 404,
        name: "Shubham Chaudhary",
        errorMessage: "Help article not found"
    })
})

app.get('/weather', (req, res)=>{
    if (!req.query.address){
        return res.send({
            error: "Please provide an address to get weather report."
        })
    }
    geocode(req.query.address, (error, {longitude, latitude, location} = {})=>{
        if(error){
            return res.send({
                error: error
            })
        }
        forecast(longitude, latitude, (error, {description, temperature, feelsLike}={})=>{
            if(error){
                return res.send({
                    error: error
                })
            }
            res.send({
                location,
                weather: description+": It is currently "+temperature+" degrees but it feels like "+feelsLike+" degrees outside."
            })
        })
    })
})

app.get('*', (req,res)=>{
    res.render('error', {
        title: 404,
        name: "Shubham Chaudhary",
        errorMessage: "Page Not Found"
    })
})

app.listen(3000, ()=>{
    console.log('Server started on port 3000')
})