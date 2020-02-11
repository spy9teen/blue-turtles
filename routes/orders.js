const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orders');

router.get('/', (req, res) => OrderController.index(req, res));//read list

router.get('/:id', (req, res, next) => {OrderController.read(req, res)});//read one

router.post('/', (req, res, next) => {OrderController.create(req, res)});//create

router.put('/:id', (req, res, next) => {OrderController.update(req, res)});//update

router.delete('/:id', (req, res, next) => {OrderController.delete(req, res)});

module.exports = router;