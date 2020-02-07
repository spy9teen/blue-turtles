const User = require('../models/users');

class UserController {
    static async index (req, res) {
        res.send(await new User('Users').getList());
    };

    static async read(req, res) {
        res.send(await new User('Users').getElement(req.params.id));
    }
    
    static async create(req, res) {
        res.send(await new User('Users').createElement(req.body));
        /*res.send({test: true,
                    message: 'user CREATE controller',
                    request: req.body
                });*/
    }

    static async update(req, res) {
        res.send(await new User('Users').updateElement(req.params.id, req.body));
        /*res.send({test: true,
                    message: 'user UPDATE controller',
                    id: req.params.id,
                    request: req.body
                });*/
    }
    static async delete(req, res) {
        res.send(await new User('Users').deleteElement(req.params.id));
        /*res.send({test: true,
                    message: 'user DELETE controller',
                    id: req.params.id
                });*/
    }
}

module.exports = UserController
