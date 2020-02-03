//const serviceLocator = require('../services/service.locator')

class BaseModel {

    constructor(tableName) {
        /*this.table = serviceLocator
            .get('db')
            .table(tableName)*/
            this.testTableName = tableName;
    }

    getList() {
        //return this.table.select('*')
        return [{test: 0, list: 0, tableName: this.testTableName},
                {test:1, list: 1, tableName: this.testTableName}];
    }

    getElement(id) {
        /*return this.table.select('*')
            .where('id', id)
            .first()*/
            return {test: 'test',
                    id: id,
                    tableName: this.testTableName};
    }


}

module.exports = BaseModel