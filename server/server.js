const express = require("express");
const cors = require("cors");

require("dotenv").config();

// import connectDB from db module 
const connectDB = require("./db.js");


// Create Application routes
const userRoutes = require("./routes/userRouter.js");
const profileRoutes = require("./routes/profileRouter.js");


// create express application 
const server = express();

// enable CORS for all routes
server.use(cors());


//use 'express.json, express.urlencoded' for parsing application/json , application/x-www-form-urlencoded 
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// general endpoint 
server.get('/', (req, res) => {
    res.send(('<h1>Welcome to Mohammad AlAjoa Home!!!</h1>'));
});


// use routes
server.use("/api/users", userRoutes);
server.use("/api/profiles", profileRoutes);


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