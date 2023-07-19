const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  // Get the authorization header
  const authHeader = req.headers["authorization"];

  // Extract the token from the header
  const token = authHeader && authHeader.split(" ")[1];
  // console.log(token);
  // If there's no token, return a 401 status (Unauthorized)
  if (token == null) return res.sendStatus(401);

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    // If the token is not valid, return a 403 status (Forbidden)
    if (err) return res.sendStatus(403);

    // If the token is valid, set the user in the request and call the next middleware
    req.user = user;
    next();
  });
}