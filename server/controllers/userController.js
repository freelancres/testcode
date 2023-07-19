const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// import the User model:
const User = require("../models/User.js");

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Response}
 * @description Create user api controller
 */

const signup = async (req, res) => {
  try {
    //read validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { username, password } = req.body;
    console.log({ username, password });
    // Create a new user object
    const newUser = new User({
      username,
      password,
    });

  
    //Save the user
    await newUser.save();

    return res.status(201).json({
        user: {
          username,
          id : newUser._id
      },
    });
  } catch (error) {
    return res.status(500).json({ error: "Server Error" });
  }
};


/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Response}
 * @description signin user api controller
 */

const signin = async (req, res) => {
  try {
    //read validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { username, password } = req.body;
    console.log({ username, password });
    // find user in mongoDB
    const user = await User.findOne({ username });
    console.log(user);
    // not found user error
    if (!user) {
      return res.status(404).json({
        error: "Invalid username or password",
      });
    }

    // Compare the provided password with stored hashed password
    const validPassword = await bcrypt.compare(password, user.password);

    // wrong password
    if (!validPassword) {
      return res.status(404).json({
        error: "Invalid username or password",
      });
    }

    // correct password

    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      //{ expiresIn: "30m" }, // JWT token is valid for 15 minutes
      (err, token) => {
        if (err) throw err;
        // Send token
         return res.status(200).json({
          message: "Congrats !!",
          token,
          id : user._id

        });
      }
    );
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
    });
  }
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Response} response object
 */

const signout = (req, res) => {
    return res.status(200).json({ message: "User signout successfully" });
};

module.exports = { signup, signin, signout };