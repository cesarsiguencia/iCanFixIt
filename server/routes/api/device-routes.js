const router = require('express').Router()

const { getAllDevices, getDevicesById, createDevice, updateDeviceStatus, updateDeviceReview, updateDeviceNotes, deletedDevice, deletedDevicebyClient} = require('../../controller/device-controller')

router.route('/')
    .get(getAllDevices)
    .post(createDevice)

router.route('/:id')
    .get(getDevicesById)
    .delete(deletedDevice)
    .put(updateDeviceStatus)

router.route('/review/:id')
    .put(updateDeviceReview)

router.route('/myNotes/:id')
    .put(updateDeviceNotes)

router.route('/byClient/:id')
    .delete(deletedDevicebyClient)

// router.route('/:ownerId')
//     .post(createDevice)

module.exports = router;