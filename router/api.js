const express = require("express")
const router = express.Router()
const ApiController = require("../controller/apiController")
const {validarId} = require("../middlewares/validarid")
const checks = require("../middlewares/checks")
const {validarCheck} = require("../middlewares/validarCheck")
const {validarModelo} = require('../middlewares/validarmodelo')

router.get('/list', ApiController.apiGet)
router.get('/auto/:id',validarId ,ApiController.BuscarPorId)
router.get("/marcas", ApiController.getApi)
router.get('/modelo/:modelo', validarModelo, ApiController.searchModel)

router.post('/crear',checks, validarCheck, ApiController.apiPost)

router.put('/editar/:id',validarId, checks, validarCheck, ApiController.apiPut)

router.delete('/borrar/:id', validarId,  ApiController.apiDelete)


module.exports = router