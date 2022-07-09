const Router = require('express')
const router = new Router()
const prisonerController = require('../controller/prisoner.controller')


router.post('/prisoner', prisonerController.addPrisoner)
router.get('/prisoner', prisonerController.getPrisoners)
router.get('/prisoner/:id', prisonerController.getOnePrisoner)
router.put('/prisoner', prisonerController.updatePrisoner)
router.delete('/prisoner/:id', prisonerController.deletePrisoner)

module.exports = router