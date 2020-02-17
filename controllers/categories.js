const Category = require('../models/categories');

class CategoryController {
    static async index (req, res) {
        res.send(await new Category().getList());
    };

    static async read(req, res) {
        res.send(await new Category().getElement(req.params.id));
    }
    
    static async create(req, res) {
        res.send(await new Category().createElement(req.body));
    }

    static async update(req, res) {
        let bdOperationResult = await new Category().updateElement(req.params.id, req.body);
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
        let bdOperationResult = await new Category().deleteElement(req.params.id);
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

module.exports = CategoryController
