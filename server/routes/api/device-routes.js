const router = require('express').Router()

const { getAllDevices, getDevicesById, createDevice, uploadPhotos, deletedDevice} = require('../../controller/device-controller')

router.route('/')
    .get(getAllDevices)
    .post(createDevice)

router.route('/:id')
    .get(getDevicesById)
    .delete(deletedDevice)
    .put(uploadPhotos)

// router.route('/:ownerId')
//     .post(createDevice)

module.exports = router;