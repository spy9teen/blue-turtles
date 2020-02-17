const Order = require('../models/orders');

class OrderController {
    static async index(req, res) {
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
        } else {
            result = await bdOperationResult;
        }

        res.send(result);
    }//read(req, res)

    static async create(req, res) {
        let createData = (({ date, total_price, status}) => ({ date, total_price, status }))(req.body);
        createData['user_id'] = req.params.idUser;
        let bdOperationResult = await new Order().createElement(createData);
        let isOk = Boolean(bdOperationResult || bdOperationResult.length); 
        if (isOk) {
            //creating prod list
            //@TODO: make correct idOrder for postgres
            let idOrder = bdOperationResult[0];//for my SQL.
            bdOperationResult = { orderCreateResult: bdOperationResult };
            bdOperationResult['productListCreateResult'] = await new Order().setProductList(idOrder, req.params.idUser,
                req.body.productList.map((_prod) => { return { order_id: idOrder, product_id: _prod.id } }));
        }
        res.send(isOk ? 200 : 400,//status
            {
                message: isOk ? 'CREATED' : 'NOT CREATED',
                id: req.params.id,
                result: bdOperationResult
            }
        );

    }

    static async update(req, res) {
        //updating order
        let bdOperationResult = await new Order().updateElement(req.params.idOrder, req.params.idUser,
            (({ id, date, total_price, status, user_id }) => ({ id, date, total_price, status, user_id }))(req.body));
        let isOk = Boolean(bdOperationResult || bdOperationResult.length);
        if (isOk) {
            //updating prod list
            await new Order().clearProductList(req.params.idOrder, req.params.idUser);
            bdOperationResult = { orderUpdateResult: bdOperationResult };
            bdOperationResult['productListUpdateResult'] = await new Order().setProductList(req.params.idOrder, req.params.idUser,
                req.body.productList.map((_prod) => { return { order_id: req.params.idOrder, product_id: _prod.id } }));
        }
        res.send(isOk ? 200 : 400,//status
            {
                message: isOk ? 'UPDATED' : 'NOT UPDATED',
                id: req.params.id,
                result: bdOperationResult
            }
        );
    }

    static async delete(req, res) {
        bdOperationResult = await new Order().deleteElement(req.params.idOrder, req.params.idUser);
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

module.exports = OrderController
