const {Router} = require('express')
const router=Router()
const personaCtrl = require('../controller/Persona.Controller')
const { route } = require('./Ciudad.route')
const Auth = require ('../ helper/Auth')

router.post('/crear', Auth.vericarToken,  personaCtrl.crear)
router.get('/listarPersonas', Auth.vericarToken, personaCtrl.listarPersonas)
router.get('/listar/:id', Auth.vericarToken, personaCtrl.listarId)
router.get('/buscarPersonaCriterio/:criterio', Auth.vericarToken, personaCtrl.buscarPersonaCriterio)
router.delete('/eliminar/:id', Auth.vericarToken, personaCtrl.eliminar)
router.put('/actualizar/:id', Auth.vericarToken, personaCtrl.actualizar)
router.get('/listarPersonasCiudad/:id', Auth.vericarToken, personaCtrl.personaDeUnaCiudad)

module.exports = router;