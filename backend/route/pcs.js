const express = require('express')
const router = express.Router()
const controller = require('../controller/pcs')

router.get('/pcs/', controller.getAllPcs)
router.get('/pcs/:id', controller.getPcById)

module.exports = router