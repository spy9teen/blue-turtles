const Product = require('../models/products');

class ProductController {
    static async index (req, res) {
        res.send(await new Product().getList());
    };

    static async read(req, res) {
        res.send(await new Product().getElement(req.params.id));
    }
    
    static async create(req, res) {
        res.send(await new Product().createElement(req.body));
        /*res.send({
                test: true,
                controller: 'ProductController',
                getElement: 'createElement()',
                data: req.body
            }
        );*/
    }

    static async update(req, res) {
        let bdOperationResult = await new Product().updateElement(req.params.id, req.body);
        let isOk = Boolean(bdOperationResult || bdOperationResult.length);
        res.send(isOk ? 200 : 400,//status
                {
                    message: isOk ? 'UPDATED' : 'NOT UPDATED',
                    id: req.params.id,
                    result: bdOperationResult
                }
        );
        /*res.send({
                test: true,
                controller: 'ProductController',
                getElement: 'updateElement()',
                id: req.params.id,
                data: req.body
            }
        );*/

    }

    static async delete(req, res) {
        let bdOperationResult = await new Product().deleteElement(req.params.id);
        let isOk = Boolean(bdOperationResult || bdOperationResult.length);
        res.send(isOk ? 200 : 400,//status
                {
                    message: isOk ? 'DELETED' : 'NOT DELETED', 
                    id: req.params.id,
                    result: bdOperationResult
                }
        );
        /*res.send({
                test: true,
                controller: 'ProductController',
                getElement: 'deleteElement()',
                id: req.params.id
            }
        );*/
                
    }
}

module.exports = ProductController
