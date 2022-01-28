//object property shorthand 

const name = "Shubham"
const age = 24 

const user = {
    name,
    age,
    location: "Ropar"
}

console.log(user)


//object destructuring 

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 200,
    salePrice: undefined
}


const transcation = (type, {label, stock})=>{
    console.log("Type: ", type)
    console.log("Label: ", label)
    console.log("Stock: ", stock)
}

transcation('order', product)