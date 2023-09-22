const { Client, Device} = require('../models');

const clientController = {
    getAllClients(req, res) {
        Client.find({})
        .select('-__v')
        .sort({ _id: -1 })
          .then(allClients => res.json(allClients))
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    
    getClientById({ params }, res) {
        Client.findOne({ _id: params.id })
        .populate({
            path: 'devices',
            model: 'Device',
            select: '-__v',
            // options: { sort: { 'created_at': -1 } },
            populate: { 
              path: 'images',
              model: 'Images'
            }
          })
          .then(clientData => {
            
            if (!clientData) {
              res.status(404).json({ message: 'No client available' });
              return;
            }
            res.json(clientData);
        })
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    getClientByOther({ body }, res) {
      console.log(body, 'line 41....')
        Client.findOne(
          {
            email: body.validateEmail,
            address_zipcode: body.validateZipcode
          }
        ).then(clientData => {
          
          if (!clientData) {
            res.status(404).json({ message: 'No client available' });
            return;
          }
          res.json(clientData);
      })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
      });
  },

    createClient({ body }, res) {
        Client.create(body)
        .then(newClient => {
          console.log(newClient)
          res.json(newClient)
        })
        .catch(err => res.status(400).json(err));
    },

    deletedClient({ params }, res) {
        
        Client.findOneAndDelete({ _id: params.id })
      .then(deletedClient => {
        if (!deletedClient) {
          res.status(404).json({ message: 'No client available!' });
          return;
          }
        return Device.deleteMany({owner:{_id: params.id}})
          
      }).then(result=> res.json({result, message: 'success deleting'}))
      .catch(err => res.status(400).json(err));
  }

};


module.exports = clientController;