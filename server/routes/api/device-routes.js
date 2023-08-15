const router = require('express').Router()

const { getAllDevices, getDevicesById, createDevice, deletedDevice} = require('../../controller/device-controller')

router.route('/')
    .get(getAllDevices)
    

router.route('/:id')
    .post(createDevice)
    .get(getDevicesById)
    .delete(deletedDevice)

module.exports = router;