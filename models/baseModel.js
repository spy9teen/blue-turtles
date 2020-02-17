const serviceLocator = require('../services/serviceLocator');

class BaseModel {

    constructor(tableName) {
        this.tableName = tableName;
        this.table = serviceLocator
            .get('db')
            .table(tableName);
    }

    getList() {
        return this.table.select('*');
    }

    getElement(id) {
        return this.table.select('*')
            .where('id', Number(id))
            .first();
    }

    createElement(data) {
        return this.table.insert(data).returning('*');
    }

    updateElement(id, data) {
        return this.table.where('id', Number(id)).update(data).returning('*');
    }

    deleteElement(id) {
        return this.table.where('id', Number(id)).del().returning('*');
    }


}

module.exports = BaseModel;
