const{Car} = require("../models/cars")
const axios = require('axios')


const ApiController = {
  async apiGet(req, res) {
    try {
      const listadoDeAutos = await Car.find();
      res.status(200).json(listadoDeAutos);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving cars' }); 
    }
  },

  async getApi  (_, res) {
    try {
      const getCarsApi = await (
        await axios("https://parallelum.com.br/fipe/api/v1/carros/marcas"));
      console.log(getCarsApi);
      res.status(200).json(getCarsApi.data);
    } catch (error) {
      res.status(500).send(error);
    }
  },

    async BuscarPorId (req, res){
        try {const buscar = await Car.findById(req.params.id)
        res.status(200).json(buscar)
        }catch (error) {
          res.status(500).send(error);
        }
          
    },
    async searchModel(req, res) {
      try {
        const item = await Car.findOne({ modelo: req.params.modelo });
    
        if (!item) {
          res.status(404).json({ error: 'Auto no encontrado' });
        } else {
          res.json({ item });
        }
      } catch (error) {
        res.status(500).json({ error: 'Error al encontrar el auto' });
      }
    },

    async apiPost(req, res) {
      try {
        const nuevoAuto = new Car(req.body);
        await nuevoAuto.save();
        res.status(201).json(nuevoAuto);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },


    async apiPut(req, res) {
      try {
        await Car.findByIdAndUpdate(req.params.id, req.body);
        const buscar = await Car.findById(req.params.id);
        res.status(200).json(buscar);
      } catch (error) {
        res.status(400).json({ error: error.message }); 
      }
    },


    async apiDelete(req, res) {
      try {
        await Car.findByIdAndDelete(req.params.id);
        res.status(200).json({
          msg: "El auto con el id " + req.params.id + " fue borrado"
        });
      } catch (error) {
          res.status(404).json({ error: 'Auto no encontrado' });
        
      }
    }
}

module.exports = ApiController