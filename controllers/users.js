const User = require('../models/users');

class UserController {
    static async index (req, res) {
        res.send(await new User('Users').getList());
    };

    static async read(req, res) {
        res.send(await new User('Users').getElement(req.params.id));
    }
    
    static async create(req, res) {
        let bdOperationResult = await new User('Users').createElement(req.body);
        res.send(bdOperationResult);
    }

    static async update(req, res) {
        let bdOperationResult = await new User('Users').updateElement(req.params.id, req.body);
        res.send(bdOperationResult ? 200 : 400,//status
                {
                    message: bdOperationResult ? 'UPDATED' : 'NOT UPDATED',
                    id: req.params.id
                }
        );
    }

    static async delete(req, res) {
        let bdOperationResult = await new User('Users').deleteElement(req.params.id);
        res.send(bdOperationResult ? 200 : 400,//status
                {
                    message: bdOperationResult ? 'DELETED' : 'NOT DELETED', 
                    id: req.params.id
                }
        );
        
    }
}

module.exports = UserController
