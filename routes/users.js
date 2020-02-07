const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');

/* GET users listing. */
/*router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});*/

router.get('/', (req, res) => UserController.index(req, res));//read list

router.get('/:id', (req, res, next) => UserController.read(req, res));//read one

router.post('/', (req, res, next) => {return {test: 'create router'}});//create

router.put('/:id', (req, res, next) => {return {test: 'update router'}});//update

router.delete('/:id', (req, res, next) => {return {test: 'delete router'}});

module.exports = router;
