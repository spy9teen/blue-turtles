const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');

router.get('/', (req, res) => UserController.index(req, res));//read list

router.get('/:id', (req, res, next) => UserController.read(req, res));//read one

router.post('/', (req, res, next) => {UserController.create(req, res)});//create

router.put('/:id', (req, res, next) => {UserController.update(req, res)});//update

router.delete('/:id', (req, res, next) => {UserController.delete(req, res)});

module.exports = router;
