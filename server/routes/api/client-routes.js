const router = require('express').Router()

const { getAllClients, getClientById, createClient, deletedClient, getClientByOther} = require('../../controller/client-controller')

router.route('/')
    .get(getAllClients)
    .post(createClient)

router.route('/:id')
    .get(getClientById)
    .delete(deletedClient)

router.route('/validate')
    .post(getClientByOther)


module.exports = router;