const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/products');

router.get('/', (req, res) => ProductController.index(req, res));//read list

router.get('/:id', (req, res, next) => {ProductController.read(req, res)});//read one

router.post('/', (req, res, next) => {ProductController.create(req, res)});//create

router.put('/:id', (req, res, next) => {ProductController.update(req, res)});//update

router.delete('/:id', (req, res, next) => {ProductController.delete(req, res)});

module.exports = router;
