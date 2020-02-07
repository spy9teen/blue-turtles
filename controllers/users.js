const User = require('../models/users');

class UserController {
    static async index (req, res) {
        res.send(await new User('Users').getList());
    };

    static async read(req, res) {
        res.send(await new User('Users').getElement(req.params.id))
    }
    
    static async create(req, res) {
        //res.send(await User.create(req));
        res.send({test: true, message: 'user CREATE controller'});
    }

    static async update(req, res) {
        // res.send(await User.save());
        res.send({test: true, message: 'user UPDATE controller'});
    }
    static async delete(req, res) {
        // res.send(await User.delete(req.params.id));
        res.send({test: true, message: 'user DELETE controller'});
    }
}

module.exports = UserController
