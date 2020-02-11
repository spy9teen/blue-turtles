const express = require('express');
const app = express();

app.use(express.json());//to read req body

require('dotenv').config();
//console.log('env test: ', process.env.DB_TYPE, process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME);

//DB connection-------------------------------------------------
const serviceLocator = require('./services/serviceLocator');

const knexConnection = { client: process.env.DB_CLIENT,
                         connection: 
                            { host : process.env.DB_HOST,
                              user : process.env.DB_USER,
                              password : process.env.DB_PASSWORD,
                              database : process.env.DB_NAME
                            } 
                        };
serviceLocator.register('db', require('knex')(knexConnection));

//Routes------------------------------------------------------
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

app.get('/mindk', (req, res) => res.send('Learn js'));

//Run app-------------------------------------------------------------
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});








// const app = function (context) {
//     context.response = "hello";
//     return context;
// }

// const ctx = {
//     request: {
//         user: {
//             name: 'Vasya',
//             age: 15
//         }
//     },
//     response: {}
// }

// const authMiddleware = function ({ request, response }, next) {
//     if (!request.user) {
//         throw Error('No unauthorized!');
//     }
//     next({ request, response });
// }

// const checkAgeMiddleWare = function ({ request, response }, next) {
//     if (!request.user || (request.user.age < 18)) {
//         throw Error('Age less that 18!');
//     }
//     next({ request, response });
// }

// const middlewares = [
//     authMiddleware,
//     checkAgeMiddleWare,
//     app
// ];

// function executeMiddlewareChain(context) {
//     const mw = middlewares.shift();
//     mw(context, executeMiddlewareChain.bind(this, context));
// }

// try {
//     // console.log(app(ctx));
//     executeMiddlewareChain(ctx);
//     console.log(ctx);
//     // console.log(authMiddleware(ctx, ));
// } catch (err) {
//     console.log('err --- ', err);
// }