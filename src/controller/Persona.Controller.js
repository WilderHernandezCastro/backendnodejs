const PersonaCtrl ={}
const Persona = require('../models/Persona.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

PersonaCtrl.crear = async(req, res)=>{
    const {nombres, apellidos, ciudad, ciudadNombre, posicion, equipo} = req.body
    const NuevaPersona = new Persona({nombres, apellidos, ciudad, ciudadNombre, posicion, equipo})
    const respuesta = await NuevaPersona.save()
    res.json({mensaje: 'Persona Creada', respuesta})
}

PersonaCtrl.listarPersonas = async(req, res)=>{
    const respuesta = await Persona.find()
    res.json(respuesta)
}

PersonaCtrl.listarId = async(req, res)=>{
    const id = req.params.id
    const respuesta = await Persona.findById({_id: id})
    res.json(respuesta)
}

PersonaCtrl.personaDeUnaCiudad = async(req, res)=>{
    const id = req.params.id
    const respuesta = await Persona.find({ciudad: id})
    res.json(respuesta)
}

PersonaCtrl.eliminar = async (req, res)=>{
    const id = req.params.id
    await Persona.findByIdAndRemove({_id: id})
    res.json({mensaje: 'Persona eliminada'})
}

PersonaCtrl.actualizar = async (req, res)=>{
    const id = req.params.id
    await Persona.findByIdAndUpdate ({_id: id}, req.body)
    res.json({mensaje: 'Persona actualizada'})
}

PersonaCtrl.buscarPersonaCriterio = async (req, res)=>{
    const estadoVacuna = req.params.criterio
    try {                                    //campo de la bd : variable estadoVacuna
        const respuesta = await Persona.find({estadoVacuna: estadoVacuna})
        res.json(respuesta)
    } catch (error) {
        return res.status(400).json({mensaje: 'ocurrio un error', error})
    }
}


module.exports =  PersonaCtrl;