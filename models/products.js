
const BaseModel = require('./baseModel');

class Product extends BaseModel {
    constructor() {
        super('products');
    }
}

module.exports = Product;
