const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req, res }, next) {
    // allows token to be sent via headers
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Authorization token missing or invalid." });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token missing or invalid." });
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret);
      req.user = data;
      next();
    } catch (error) {
      console.log("Invalid token");
      return res.status(401).json({ message: "Invalid token." });
    }
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
