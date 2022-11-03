require('dotenv').config();

//async error handler

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.json());

//routes
app.use('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/v1/products">Products</a>');
});

//products routes



app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
    try {
        const port = process.env.PORT || 3000;
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}