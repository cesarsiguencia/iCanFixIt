const router = require('express').Router();
const clientRoutes = require('./client-routes')
const deviceRoutes = require('./device-routes')
const imageRoutes = require('./image-routes')

router.use('/clients', clientRoutes)
router.use('/devices', deviceRoutes)
router.use('/images', imageRoutes)

module.exports = router;