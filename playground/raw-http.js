const http = require('http')
const url = "http://api.weatherstack.com/current?access_key=cec75ce35494f7b84820862234399474&query="

const request = http.request(url, (response)=>{
    let data = ''
    response.on('data', (chunk)=>{
        data = data + chunk.toString()
    })

    response.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error)=>{
    console.log(error)
})

request.end()