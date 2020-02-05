const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const serviceLocator = require('./services/serviceLocator')

serviceLocator.register('db', require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '',
        database : 'testdb'
    }
}))

app.get('/mindk', function (req, res) {
    res.send('Learn js');
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

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