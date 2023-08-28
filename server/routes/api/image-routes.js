const router = require('express').Router()

const { deviceImages, uploadDeviceImages, deletedImage, sendImageInfo } = require('../../controller/image-controller')

router.route('/')
    .get(deviceImages)
    // .post(uploadDeviceImages)

router.route('/:id')
    .delete(deletedImage)

router.route('/upload')
    .post(sendImageInfo)

module.exports = router;