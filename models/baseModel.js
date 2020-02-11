const serviceLocator = require('../services/serviceLocator');

class BaseModel {

    constructor(tableName) {
        this.testTableName = tableName;
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
        /*return {
            test: true,
            message: 'Base model CREATE',
            data: data
        };*/
        return this.table.insert(data);
    }

    updateElement(id, data) {
        /*return {
            test: true,
            message: 'Base model UPDATE',
            id: id,
            data: data
        };*/
        return this.table.where('id', Number(id)).update(data);
    }

    deleteElement(id) {
        /*return {
            test: true,
            message: 'Base model DELETE',
            id: id
        };*/
        return this.table.where('id', Number(id)).del(); //not working
    }


}

module.exports = BaseModel;