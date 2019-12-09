const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/:id', (req, res, next) => {
    //console.log(req.params);
    let userID = req.params.id;
    res.send('Requested user with id: ' + userID);
});

module.exports = router;