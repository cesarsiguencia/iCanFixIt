const router = require('express').Router()

const { getAllDevices, getDevicesById, createDevice, updateDevice, deletedDevice, deletedDevicebyClient} = require('../../controller/device-controller')

router.route('/')
    .get(getAllDevices)
    .post(createDevice)

router.route('/:id')
    .get(getDevicesById)
    .delete(deletedDevice)
    .put(updateDevice)

router.route('/byClient/:id')
.delete(deletedDevicebyClient)

// router.route('/:ownerId')
//     .post(createDevice)

module.exports = router;