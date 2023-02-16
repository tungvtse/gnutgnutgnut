const express = require('express');
const nationController = require('../controllers/nationController')
const nationRouter = express.Router();
nationRouter.route('/')
    .get(nationController.index)
    .post(nationController.create);
nationRouter.route('/edit/:nationId')
    .get(nationController.formEdit)
    .post(nationController.edit);
nationRouter.route('/delete/:nationId')
    .get(nationController.delete);

module.exports = nationRouter;


