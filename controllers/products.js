const Product = require('../models/products');

class ProductController {
    static async index (req, res) {
        res.send(await new Product('Products').getList());
        /*res.send({
                test: true,
                controller: 'ProductController',
                method: 'getList()'
            }
        );*/
    };

    static async read(req, res) {
        res.send(await new Product('Products').getElement(req.params.id));
        /*res.send({
                test: true,
                controller: 'ProductController',
                getElement: 'getElement()',
                id: req.params.id
            }
        );*/
    }
    
    static async create(req, res) {
        //res.send(await new Product('Products').createElement(req.body));
        res.send({
                test: true,
                controller: 'ProductController',
                getElement: 'createElement()',
                data: req.body
            }
        );
    }

    static async update(req, res) {
        /*let bdOperationResult = await new Product('Products').updateElement(req.params.id, req.body);
        res.send(bdOperationResult ? 200 : 400,//status
                {
                    message: bdOperationResult ? 'UPDATED' : 'NOT UPDATED',
                    id: req.params.id
                }
        );*/
        res.send({
                test: true,
                controller: 'ProductController',
                getElement: 'updateElement()',
                id: req.params.id,
                data: req.body
            }
        );

    }

    static async delete(req, res) {
        /*let bdOperationResult = await new Product('Products').deleteElement(req.params.id);
        res.send(bdOperationResult ? 200 : 400,//status
                {
                    message: bdOperationResult ? 'DELETED' : 'NOT DELETED', 
                    id: req.params.id
                }
        );*/
        res.send({
                test: true,
                controller: 'ProductController',
                getElement: 'deleteElement()',
                id: req.params.id
            }
        );
                
    }
}

module.exports = ProductController
