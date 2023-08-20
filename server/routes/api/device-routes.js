const router = require('express').Router()

const { getAllDevices, getDevicesById, createDevice, updateDevice, deletedDevice} = require('../../controller/device-controller')

router.route('/')
    .get(getAllDevices)
    .post(createDevice)

router.route('/:id')
    .get(getDevicesById)
    .delete(deletedDevice)
    .put(updateDevice)

// router.route('/:ownerId')
//     .post(createDevice)

module.exports = router;