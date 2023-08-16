const { Client, Device } = require('../models');

const deviceController = {
    getAllDevices(req, res) {
        Device.find({})
        .select('-__v')
        .sort({ _id: -1 })
          .then(allDevices => res.json(allDevices))
          
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    
    getDevicesById({ params }, res) {
        Device.findOne({ _id: params.id })
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

    // createDevice({ params, body }, res) {
    //     Device.create(body)
    //     .then(({_id}) => {
    //       return Client.findOneAndUpdate(
    //         { _id: params.ownerId },
    //         { $push: { devices: _id}},
    //         { 
    //           new: true,
    //           runValidators: true
    //         }
    //       )
    //     })
    //     .then(newDevice => res.json(newDevice))
    //     .catch(err => res.status(400).json(err));
    // },

    createDevice({ body }, res) {
      Device.create(body)
      .then((selectedDevice) => {
        return Client.findOneAndUpdate(
          { _id: selectedDevice.owner },
          { $push: { devices: selectedDevice._id}},
          { 
            new: true,
            runValidators: true
          }
        )
      })
      .then(newDevice => res.json(newDevice))
      .catch(err => res.status(400).json(err));
  },

  uploadPhotos({ params, body }, res) {
    Device.findOneAndUpdate(
      { _id: params.id }, 
      body, 
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
  }

};


module.exports = deviceController;