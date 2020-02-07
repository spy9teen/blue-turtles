const serviceLocator = require('../services/serviceLocator');

class BaseModel {

    constructor(tableName) {
        this.testTableName = tableName;
        this.table = serviceLocator
            .get('db')
            .table(tableName);
    }

    getList() {
        //return [{list: 0, test: true}, {list: 1, test: true}];//test
        return this.table.select('*');
    }

    getElement(id) {
        //return {id: Number(id), test: true};//test
        return this.table.select('*')
            .where('id', Number(id))
            .first();
    }


}

module.exports = BaseModel;