const express = require('express');
require('dotenv').config();

const userRoutes = require('./routes/userRouter');
const profileRoutes = require('./routes/profileRouter');
const connectDB = require('./db');

// create express application 
const server = express();

//use 'express.json, express.urlencoded' for parsing application/json , application/x-www-form-urlencoded 
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// use routes
server.use("/api/users", userRoutes);
server.use("/api/profiles", profileRoutes);

// general endpoint 
server.get('/', (req, res) => {
    res.send(('<h1>Welcome to Mohammad AlAjoa Home!!!</h1>'));
});

//connect to mongoDB

connectDB();

// define PORT

const PORT = process.env.PORT;

// run the server on PORT

server.listen(
    PORT,
    () => console.log(
        `Server is running on port ${PORT}`
    )
);