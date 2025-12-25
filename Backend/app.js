const express = require ('express')
const app = express()
const cookieParser= require('cookie-parser')
const globalErrorHandler = require('./modules/errors/errorHandling.middleware.js')
const cors = require("cors");

//Middleware to allow requests from my frontend
app.use(cors({
    origin:'http://localhost:5173', //frontend URL
    methods :['GET','POST','PUT','DELETE'], // Allowed http request
    credentials : true, // if you need cookie
}))
//Middlewares
app.use(express.json());
app.use(cookieParser());

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Project Manager')
})

// Start Adding all of you routes under Here ▼
app.use('/manager', require('./modules/manager/manager.route.js'));
// Start Adding all of you routes above Here ▲

app.use(globalErrorHandler);

module.exports = app ;