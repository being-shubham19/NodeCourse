console.log("JS FILE STATIC LOADING ")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const paragraph1 = document.querySelector('#message-1')
const paragraph2 = document.querySelector('#message-2')
paragraph1.textContent = ''
paragraph2.textContent = ''
weatherForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    paragraph1.textContent = 'Loading....'
    paragraph2.textContent = ''
    const location = search.value
    const url = 'http://localhost:3000/weather?address='+location
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                paragraph1.textContent = data.error
                return console.log(data.error)
            }
            paragraph1.textContent = data.location
            paragraph2.textContent = data.weather
            console.log(data)
        })
    })
})