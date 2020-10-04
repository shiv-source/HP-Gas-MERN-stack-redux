const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
require('./config/db');


const app = express();

//Setup middlewares;
app.use(cors());
app.use(bodyParser.urlencoded({extended : false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(passport.initialize());
require("./middlewares/passport")(passport);



//routes handlings;
const userRoutes = require('./routes/user');

app.use('/api', userRoutes );

const costomerRoutes = require('./routes/costomer');
app.use("/api" , costomerRoutes);


module.exports = app;
