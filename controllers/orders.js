const Order = require('../models/orders');

class OrderController {
    static async index (req, res) {
        res.send(await new Order('orders').getFullList());
    };

    static async read(req, res) {
        let bdOperationResult = Boolean(req.params.idOrder) ?
                                new Order('orders').getElement(req.params.idOrder, req.params.idUser) :
                                new Order('orders').getList(req.params.idUser);

        res.send(await bdOperationResult);
    }
    
    static async create(req, res) {
        //@TODO: creation with prod list
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
        //@TODO: creation with prod list
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
        //@TODO: del with pg base
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