const{Car} = require("../models/cars")

const validarId = async (req, res, next) =>{
    try {
        const buscar = await Car.findById(req.params.id)    
    if (buscar !== null){
        next()
    }else{
        res.status(400).json({
            msg: "el id" + req.params.id + "es invalido"
        })
    }
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {validarId}