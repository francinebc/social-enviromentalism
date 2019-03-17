const express = require("express");
const router = express();
const db = require("../db/db");

router.post("/register", register);

function register(req, res) {
  db.createUser(req.body)
    .then(([id]) => {
      res.locals.userId = id;
    })
    .then(() => res.status(201).json({ ok: true }))
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
