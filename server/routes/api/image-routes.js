const router = require('express').Router()

const { deviceImages, uploadDeviceImages, deletedImage } = require('../../controller/image-controller')

router.route('/')
    .get(deviceImages)
    .post(uploadDeviceImages)

router.route(':id')
    .delete(deletedImage)

module.exports = router;