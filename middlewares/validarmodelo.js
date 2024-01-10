const {Car}= require('../models/cars')

const validarModelo = async (req, res, next) => {
    try {
        const item = await Car.findOne(req.params)
        if (item !== null) {
            next()
        } else {
            return res.status(501).json({msg:'El modelo no existe'})
        }
    } catch (error) {
        res.status(501).json(error)
    }
}

module.exports = {validarModelo}