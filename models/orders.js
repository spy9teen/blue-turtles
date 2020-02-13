
const BaseModel = require('./baseModel');

class Order extends BaseModel {
    constructor() {
        super('orders');

        this.tableNameProd = 'products';
        this.tableNameOrderedProd = 'ordered_products';
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

    getProductList(idOrder, idUser) {
        return this.table.select(this.tableNameProd + '.id', this.tableNameProd + '.name', this.tableNameProd + '.price')
                        .join(this.tableNameOrderedProd, this.tableName + '.id', this.tableNameOrderedProd + '.order_id')
                        .join(this.tableNameProd, this.tableNameOrderedProd + '.product_id', this.tableNameProd + '.id')
                        .where(this.tableName + '.id', idOrder)
                        .where(this.tableName + '.user_id', idUser);
    }
}

module.exports = Order;
