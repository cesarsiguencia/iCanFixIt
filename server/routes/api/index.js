const router = require('express').Router();
const clientRoutes = require('./client-routes')
const deviceRoutes = require('./device-routes')

router.use('/clients', clientRoutes)
router.use('/devices', deviceRoutes)

module.exports = router;