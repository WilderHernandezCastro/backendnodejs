const mongoose = require('mongoose')
const Schema =mongoose.Schema

const PersonaSchema = new Schema({
    nombres:{type: String, required:[true, 'Nombre obligatorio']},
    apellidos:String,
    ciudad:String,
    ciudadNombre: String,
    posicion:String,
    equipo:String,

    
    date:{type:Date, default:Date.now}
    
    
    
})

module.exports = mongoose.model('registroequipo', PersonaSchema)