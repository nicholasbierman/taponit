const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const { environment } = require("./config");

const isProduction = environment === "production"; /* check the environment key in config/index.js */

const app = express();


app.use(morgan("dev")); // log info about requests and responses

// parse JSON bodies of requests with Content-Type: "application/json"
app.use(express.json());
// parse cookies
app.use(cookieParser());


// Security Middleware
if (!isProduction) {
  // enable cors only in development
  app.use(cors());
}
// helmet helps set a variety of headers for better overall security
app.use(helmet({
  contentSecurityPolicy: false
}));

// Set the _csrf token and create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);

