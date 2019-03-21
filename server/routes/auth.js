const express = require("express");
const router = express();
const db = require("../../db");
const token = require("../auth/token")
const verifyJwt = require("express-jwt")

router.post("/register", register, token.issue);
router.get(
  '/route-we-want-to-protect',
  verifyJwt({secret: process.env.JWT_SECRET}),
  routeWeWantToProtect
)

function routeWeWantToProtect (req, res) {
  // ...
}

function register(req, res, next) {
  db.createUser(req.body)
    .then(([id]) => {
      res.locals.userId = id;
      next()
    })
    .catch(({ message }) => {
      // This is vulnerable to changing databases. SQLite happens to use
      // this message, but Postgres doesn't.
      if (message.includes("UNIQUE constraint failed: users.username")) {
        return res.status(400).json({
          ok: false,
          message: "Username already exists."
        });
      }
      res.status(500).json({
        ok: false,
        message: "Something bad happened. We don't know why."
      });
    });
}

module.exports = router;
