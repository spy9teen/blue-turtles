const User = require('../models/users')

class UserController {
    static async index (req, res) {
        res.send(await new User('Users').getList());
        //res.send('test result');
    }

    static async read(req, res) {
        res.send(await new User('Users').getElement(req.params.id))
    }
    
    static create(req, res) {
        // res.send(await User.create(req))
    }

    static update(req, res) {
        // res.send(await User.save())
    }
    static delete(req, res) {
        // res.send(await User.delete(req.params.id))
    }
}

module.exports = UserController