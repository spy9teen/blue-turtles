//const Order = require('../models/orders');

class OrderController {
    static async index (req, res) {
        //res.send(await new Order('Orders').getList());
        res.send({
                test: true,
                controller: 'OrderController',
                method: 'getList()'
            }
        );
    };

    static async read(req, res) {
        //res.send(await new Order('Orders').getElement(req.params.id));
        res.send({
                test: true,
                controller: 'OrderController',
                getElement: 'getElement()',
                id: req.params.id
            }
        );
    }
    
    static async create(req, res) {
        //res.send(await new Order('Orders').createElement(req.body));
        res.send({
                test: true,
                controller: 'OrderController',
                getElement: 'createElement()',
                data: req.body
            }
        );
    }

    static async update(req, res) {
        /*let bdOperationResult = await new Order('Orders').updateElement(req.params.id, req.body);
        res.send(bdOperationResult ? 200 : 400,//status
                {
                    message: bdOperationResult ? 'UPDATED' : 'NOT UPDATED',
                    id: req.params.id
                }
        );*/
        res.send({
                test: true,
                controller: 'OrderController',
                getElement: 'updateElement()',
                id: req.params.id,
                data: req.body
            }
        );

    }

    static async delete(req, res) {
        /*let bdOperationResult = await new Order('Orders').deleteElement(req.params.id);
        res.send(bdOperationResult ? 200 : 400,//status
                {
                    message: bdOperationResult ? 'DELETED' : 'NOT DELETED', 
                    id: req.params.id
                }
        );*/
        res.send({
                test: true,
                controller: 'OrderController',
                getElement: 'deleteElement()',
                id: req.params.id
            }
        );
                
    }
}

module.exports = OrderController