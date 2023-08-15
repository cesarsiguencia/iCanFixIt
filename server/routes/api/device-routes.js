const router = require('express').Router()

const { getAllDevices, getDevicesById, createDevice, deletedDevice} = require('../../controller/device-controller')

router.route('/')
    .get(getAllDevices)
    .post(createDevice)

router.route('/:id')
    .get(getDevicesById)
    .delete(deletedDevice)

// router.route('/:ownerId')
//     .post(createDevice)

module.exports = router;