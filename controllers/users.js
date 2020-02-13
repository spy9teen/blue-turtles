const User = require('../models/users');

class UserController {
    static async index (req, res) {
        res.send(await new User().getList());
    };

    static async read(req, res) {
        res.send(await new User().getElement(req.params.id));
    }
    
    static async create(req, res) {
        let bdOperationResult = await new User().createElement(req.body);
        res.send(bdOperationResult);
    }

    static async update(req, res) {
        let bdOperationResult = await new User().updateElement(req.params.id, req.body);
        res.send(bdOperationResult ? 200 : 400,//status
                {
                    message: bdOperationResult ? 'UPDATED' : 'NOT UPDATED',
                    id: req.params.id
                }
        );
    }

    static async delete(req, res) {
        let bdOperationResult = await new User().deleteElement(req.params.id);
        res.send(bdOperationResult ? 200 : 400,//status
                {
                    message: bdOperationResult ? 'DELETED' : 'NOT DELETED', 
                    id: req.params.id
                }
        );
        
    }
}

module.exports = UserController
