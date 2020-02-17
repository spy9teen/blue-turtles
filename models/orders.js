
const BaseModel = require('./baseModel');
const serviceLocator = require('../services/serviceLocator');

class Order extends BaseModel {
    constructor() {
        super('orders');

        this.tableNameProd = 'products';
        this.tableNameOrderedProd = 'ordered_products';

        this.tableProd = serviceLocator
            .get('db')
            .table('ordered_products');
    }

    getFullList() {
        return this.table.select('*');
    }

    getList(idUser) {
        return this.table.select('*')
            .where('user_id', Number(idUser));
    }

    getElement(idOrder, idUser) {
        return this.table.select('*')
                .where({
                    id: idOrder,
                    user_id: idUser
                }).first();
    }

    updateElement(idOrder, idUser, data) {
        //return this.table.where({id: Number(idOrder), user_id: Number(idUser)}).update(data).returning('*').toSQL();
        return this.table.where({id: Number(idOrder), user_id: Number(idUser)}).update(data).returning('*');
    }

    getProductList(idOrder, idUser) {
        return this.table.select(this.tableNameProd + '.id', this.tableNameProd + '.name', this.tableNameProd + '.price')
                        .join(this.tableNameOrderedProd, this.tableName + '.id', this.tableNameOrderedProd + '.order_id')
                        .join(this.tableNameProd, this.tableNameOrderedProd + '.product_id', this.tableNameProd + '.id')
                        .where(this.tableName + '.id', idOrder)
                        .where(this.tableName + '.user_id', idUser);
    }

    setProductList(idOrder, idUser, productList) {
        return this.tableProd.insert(productList).returning('*');
    }

    clearProductList(idOrder, idUser) {
        return this.tableProd.where('order_id', Number(idOrder)).del().returning('*');
    }
}

module.exports = Order;
