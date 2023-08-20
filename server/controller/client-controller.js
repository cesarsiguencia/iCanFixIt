const { Client } = require('../models');

const clientController = {
    getAllClients(req, res) {
        Client.find({})
        // .populate({
        //   path: 'devices',
        //   select: '-__v'
        // })
        .select('-__v')
        .sort({ _id: -1 })
          .then(allClients => res.json(allClients))
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    
    getClientById({ params }, res) {
      console.log(params.id)
        Client.findOne({ _id: params.id })
        .populate({
            path: 'devices',
            select: '-__v'
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
          res.json(deletedClient);
      })
      .catch(err => res.status(400).json(err));
  }

};


module.exports = clientController;