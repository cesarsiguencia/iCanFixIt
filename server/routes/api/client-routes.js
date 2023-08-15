const router = require('express').Router()

const { getAllClients, getClientById, createClient, deletedClient} = require('../../controller/client-controller')

router.route('/')
    .get(getAllClients)
    .post(createClient)

router.route('/:id')
    .get(getClientById)
    .delete(deletedClient)

module.exports = router;