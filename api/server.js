const session = require("express-session");
const knexSessionStore = require("connect-session-knex")(session);
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
const jokesRouter = require("../jokes/jokes-router.js");

const server = express();

const sessionOptions = {
  name: "sessioncookie",
  secret: "cookies for the sessions",
  cookie: {
    maxAge: 1000 * 60,
    secure: false,
    httpOnly: true
  },
  resave: true,
  saveUninitialized: false,

  store: new knexSessionStore({
    knex: require("../database/dbConfig"),
    tablename: "sessions",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 1000 * 60
  })
};

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use(session(sessionOptions));

server.use("/api/auth", authRouter);
server.use("/api/jokes", authenticate, jokesRouter);

module.exports = server;
