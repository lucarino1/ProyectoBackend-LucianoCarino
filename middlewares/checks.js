const { check } = require ("express-validator")

const checks = [
    check("marca")
        .notEmpty().withMessage("El campo marca es requerido")
        .isString().withMessage("el campo marca debe ser un string"),
    check("modelo")
        .notEmpty().withMessage("El campo modelo es requerido")
        .isString().withMessage("el campo modelo debe ser un string"),
    check("color")
        .notEmpty().withMessage("El campo color es requerido")
        .isString().withMessage("el campo color debe ser un string"),
    check("año")
        .notEmpty().withMessage("El campo año es requerido")
        .isNumeric().withMessage("El campo edad es number"),
    check("pais")
        .notEmpty().withMessage("El campo pais es requerido")
        .isString().withMessage("El campo pais es un string"),
]

module.exports = checks