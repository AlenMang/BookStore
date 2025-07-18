const express = require('express');
const app = express();
const errorHandler = require('./middlewares/errorHandler.js');
const bookRouter = require('./routes/bookRoute.js');
const userRouter = require('./routes/userRoute.js');


app.use(express.json());

app.use('/books', bookRouter);
app.use('/users', userRouter);
// app.use('/rental', rentalControl);
// app.use('/maintenance', maintenConrol);

console.log(errorHandler);

app.use(errorHandler);

module.exports = app;