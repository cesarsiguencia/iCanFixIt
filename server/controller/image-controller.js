const { Image } = require('../models');

// const multer = require('multer')

// const Storage = multer.diskStorage({
//     destination: 'uploads',
//     fileName:(req,file,cb)=>{
//         cb(null, file.originalname)
//     }
// })

// const upload = multer({storage: Storage}).single('testImage')


const imageController = {
    deviceImages(req,res){
        Image.find({})
        .select('-__v')
        .sort({ _id: -1 })
          .then(allImages => res.json(allImages))
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    sendImageInfo({ body }, res) {
        Image.create(body)
        .then((photoInfoUploaded) => {
          res.json(photoInfoUploaded)
        })
        .catch(err => res.status(400).json(err));
    },

    // uploadDeviceImages( req, res) {
    //     upload(req.res, (err=>{
    //         if(err){
    //             console.log(err)
    //         } else {
    //             const newImage = new Image({
    //                 name: req.body.name,
    //                 image: {
    //                     data: req.file.filename,
    //                     content: 'image/png'
    //                 }
    //             })
    //             newImage.save()
    //             .then(()=> res.send('success for pics')).catch(err=> console.log(err))
    //         }
    //     }))
    // },

    deletedImage({ params }, res) {
        Image.findOneAndDelete({ _id: params.id })
        .then(deletedFile => {
            if (!deletedFile) {
            res.status(404).json({ message: 'No image available!' });
            return;
            }
            res.json(deletedFile);
        })
        .catch(err => res.status(400).json(err));
    }
}

module.exports = imageController