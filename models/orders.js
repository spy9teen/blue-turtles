
const BaseModel = require('./baseModel');

class Order extends BaseModel {
    constructor() {
        super('orders');
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
}

module.exports = Order;
