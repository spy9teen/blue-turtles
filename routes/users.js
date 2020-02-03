const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');

/* GET users listing. */
/*router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});*/

router.get('/', (req, res) => UserController.index(req, res));

router.get('/:id', (req, res, next) => {
    /*console.log(req.params);
    let userID = req.params.id;
    res.send('Requested user with id: ' + userID);*/
    UserController.read(req, res);
});

module.exports = router;