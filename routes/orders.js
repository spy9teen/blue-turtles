const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orders');

router.get('/', (req, res) => OrderController.index(req, res));

router.get('/:idUser', (req, res, next) => {OrderController.read(req, res)});

router.get('/:idUser/:idOrder', (req, res, next) => {OrderController.read(req, res)});

router.post('/:idUser', (req, res, next) => {OrderController.create(req, res)});

router.put('/:idUser/:idOrder', (req, res, next) => {OrderController.update(req, res)});

router.delete('/:idUser/:idOrder', (req, res, next) => {OrderController.delete(req, res)});

module.exports = router;