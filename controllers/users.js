const User = require('../models/users');

class UserController {
    static async index (req, res) {
        res.send(await new User().getList());
    };

    static async read(req, res) {
        res.send(await new User().getElement(req.params.id));
    }
    
    static async create(req, res) {
        /*let bdOperationResult = await new User().createElement(req.body);
        res.send(bdOperationResult);*/
        res.send(await new User().createElement(req.body));
    }

    static async update(req, res) {
        let bdOperationResult = await new User().updateElement(req.params.id, req.body);
        let isOk = Boolean(bdOperationResult || bdOperationResult.length);
        res.send(isOk ? 200 : 400,//status
                {
                    message: isOk ? 'UPDATED' : 'NOT UPDATED',
                    id: req.params.id,
                    result: bdOperationResult
                }
        );
    }

    static async delete(req, res) {
        let bdOperationResult = await new User().deleteElement(req.params.id);
        let isOk = Boolean(bdOperationResult || bdOperationResult.length);
        res.send(isOk ? 200 : 400,//status
                {
                    message: isOk ? 'DELETED' : 'NOT DELETED', 
                    id: req.params.id,
                    result: bdOperationResult
                }
        );
        
    }
}

module.exports = UserController
