var express = require('express'),
    router = express.Router(),
    fetchController = require('../controllers')

router
  .get('/fetch', fetchController.fetch)
  .get('/modify', fetchController.modify)

module.exports = router