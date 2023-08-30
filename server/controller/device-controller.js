const { Client, Device } = require('../models');

const deviceController = {
    getAllDevices(req, res) {
        Device.find({})
        .populate({
          path: 'images',
          select: '-__v',
        })
        .populate({
          path: 'owner',
          // model: 'Client'
        })
        .select('-__v')
          .then(allDevices => res.json(allDevices))
          
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    
    getDevicesById({ params }, res) {
        Device.findOne({ _id: params.id })
          .populate({
          path: 'images',
          select: '-__v'
        })
          .then(deviceData => {
            if (!deviceData) {
              res.status(404).json({ message: 'No device available' });
              return;
            }
            console.log(deviceData.owner)
            res.json(deviceData);
        })
          .catch(err => {
            console.log(err);
            res.status(400).json(err);  
        });
    },

    createDevice({ body }, res) {
      Device.create(body)
      .then((selectedDevice) => {
        res.json(selectedDevice)
        return Client.findOneAndUpdate(
          { _id: selectedDevice.owner },
          { $push: { devices: selectedDevice._id}},
          { 
            new: true,
            runValidators: true
          }
        )
      })
      .catch(err => res.status(400).json(err));
  },

  updateDeviceStatus({ params, body }, res) {
    console.log(body, 'from the device photos')
    Device.findOneAndUpdate(
      { _id: params.id }, 
      { device_status: body.device_status}, 
      { 
        new: true, 
        runValidators: true 
      }
    )
    .then(updatedDevice => {
      console.log(updatedDevice.device_photos)
      res.json(updatedDevice)
    }
      )
    .catch(err => res.status(400).json(err));
  },

  updateDeviceReview({ params, body }, res) {
    console.log(body, 'whats hereee')
    Device.findOneAndUpdate(
      { _id: params.id }, 
      { owner_review: body.owner_review,
        owner_rating: body.owner_rating
      }, 
      { 
        new: true, 
        runValidators: true 
      }
    )
    .then(updatedDevice => {
      console.log(updatedDevice.device_photos)
      res.json(updatedDevice)
    }
      )
    .catch(err => res.status(400).json(err));
  },

  updateDeviceNotes({ params, body }, res) {
    Device.findOneAndUpdate(
      { _id: params.id }, 
      { my_notes: body.my_notes,}, 
      { 
        new: true, 
        runValidators: true 
      }
    )
    .then(updatedDevice => {
      console.log(updatedDevice.device_photos)
      res.json(updatedDevice)
    }
      )
    .catch(err => res.status(400).json(err));
  },


  deletedDevice({ params }, res) {
      Device.findOneAndDelete({ _id: params.id })
      .then(deletedDevice => {
          if (!deletedDevice) {
          res.status(404).json({ message: 'No device available!' });
          return;
          }
          res.json(deletedDevice);
      })
      .catch(err => res.status(400).json(err));
  },


  deletedDevicebyClient({ params }, res) {
    Device.deleteMany({ owner: params.id })
    .then(deletedDeviceByClient => {

        res.json(deletedDeviceByClient);
    })
    .catch(err => res.status(400).json(err));
},
  



};


module.exports = deviceController;