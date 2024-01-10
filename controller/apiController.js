const{Car} = require("../models/cars")
const axios = require('axios')


const ApiController = {
    async apiGet (req,res) {
        const listadoDeAutos = await Car.find()
        res.status(200).json(listadoDeAutos)
    },
    async getApi  (_, res) {
        try {
          const getCarsApi = await (
            await axios("http://localhost:3000/cars")
          ).data.map((e) => V2Cars.create({
            id: e.id,
            marca: e.marca,
            modelo: e.modelo,
            color: e.color,
            año: e.año,
            pais: e.pais
          }));
          console.log(getCarsApi);
          res.status(200).send(getCarsApi);
        } catch (error) {
          res.status(500).send(error);
        }
    },
    async BuscarPorId (req, res){
        const buscar = await Car.findById(req.params.id)
        res.status(200).json(buscar)   
    },
    async searchModel  (req, res){
        const item = await Car.findOne({modelo: req.params.modelo})
        res.json({item})
    },

    async apiPost (req,res) {
            const nuevoAuto = new Car(req.body)
            await nuevoAuto.save()
            res.status(201).json(nuevoAuto)
    },


    async apiPut (req,res) {
        await Car.findByIdAndUpdate(req.params.id, req.body)
        const buscar = await Car.findById(req.params.id)
        res.status(200).json(buscar)
    },


    async apiDelete (req,res) {
        await Car.findByIdAndDelete(req.params.id)
        res.status(200).json({
            msg: "El auto con el id" + req.params.id + " fue borrado"
        })
    },
}

module.exports = ApiController