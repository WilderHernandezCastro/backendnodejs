const {Router} = require('express')
const router=Router()
const ciudadCtrl = require('../controller/Ciudad.Controller')

router.post('/crear',  ciudadCtrl.crearCiudad)
router.post('/login', ciudadCtrl.login)

module.exports = router;