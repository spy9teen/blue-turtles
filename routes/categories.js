const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/categories');

router.get('/', (req, res) => CategoryController.index(req, res));//read list

router.get('/:id', (req, res, next) => CategoryController.read(req, res));//read one

router.post('/', (req, res, next) => {CategoryController.create(req, res)});//create

router.put('/:id', (req, res, next) => {CategoryController.update(req, res)});//update

router.delete('/:id', (req, res, next) => {CategoryController.delete(req, res)});

module.exports = router;