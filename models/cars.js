const {Schema, model} = require("mongoose")

const schema = new Schema({
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    año: {
        type: Number,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
})

const Car = model("car", schema)
module.exports = {Car}