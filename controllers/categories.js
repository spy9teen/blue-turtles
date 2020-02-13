const Category = require('../models/categories');

class CategoryController {
    static async index (req, res) {
        res.send(await new Category().getList());
    };

    static async read(req, res) {
        res.send(await new Category().getElement(req.params.id));
    }
    
    static async create(req, res) {
        //res.send(await new Category().createElement(req.body));
        res.send({
                test: true,
                controller: 'CategoryController',
                getElement: 'createElement()',
                data: req.body
            }
        );
    }

    static async update(req, res) {
        /*let bdOperationResult = await new Category().updateElement(req.params.id, req.body);
        res.send(bdOperationResult ? 200 : 400,//status
                {
                    message: bdOperationResult ? 'UPDATED' : 'NOT UPDATED',
                    id: req.params.id
                }
        );*/
        res.send({
                test: true,
                controller: 'CategoryController',
                getElement: 'updateElement()',
                id: req.params.id,
                data: req.body
            }
        );

    }

    static async delete(req, res) {
        /*let bdOperationResult = await new Category().deleteElement(req.params.id);
        res.send(bdOperationResult ? 200 : 400,//status
                {
                    message: bdOperationResult ? 'DELETED' : 'NOT DELETED', 
                    id: req.params.id
                }
        );*/
        res.send({
                test: true,
                controller: 'CategoryController',
                getElement: 'deleteElement()',
                id: req.params.id
            }
        );
                
    }
}

module.exports = CategoryController
