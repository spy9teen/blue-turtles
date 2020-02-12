
const BaseModel = require('./baseModel');

class Category extends BaseModel {
    constructor() {
        super('categories');
    }
}

module.exports = Category;