const User = require('../models/users');
const UserModel = new User('Users');

class UserController {
    static async index (req, res) {
        //res.send(await new User('Users').getList());
        res.send(await UserModel.getList());
    }

    static async read(req, res) {
        //res.send(await new User('Users').getElement(req.params.id))
        res.send(await UserModel.getElement(req.params.id))
    }
    
    static create(req, res) {
        //res.send(await User.create(req))
    }

    static update(req, res) {
        // res.send(await User.save())
    }
    static delete(req, res) {
        // res.send(await User.delete(req.params.id))
    }
}

module.exports = UserController