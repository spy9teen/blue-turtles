const Order = require('../models/orders');

class OrderController {
    static async index (req, res) {
        res.send(await new Order().getFullList());
    };

    static async read(req, res) {
        let result;//will return
        let isOrder = Boolean(req.params.idOrder);//single order
        let bdOperationResult = isOrder ?
                                {
                                    order: new Order().getElement(req.params.idOrder, req.params.idUser),
                                    productList: new Order().getProductList(req.params.idOrder, req.params.idUser)
                                }
                                : new Order().getList(req.params.idUser);

        if (isOrder) {
            result = await bdOperationResult.order;
            if (result) {
                result['productList'] = await bdOperationResult.productList;
            }
        }else {
            result = await bdOperationResult;
        }

        res.send(result);
    }//read(req, res)
    
    static async create(req, res) {
        //@TODO: creation with prod list
        //res.send(await new Order().createElement(req.body));
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
        /*let bdOperationResult = await new Order().updateElement(req.params.id, req.body);
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
        /*let bdOperationResult = await new Order().deleteElement(req.params.id);
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
