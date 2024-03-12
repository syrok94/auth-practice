const express = require("express");
const cors = require("cors");
require("dotenv").config();

const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");

const app = express();

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const AUTH_OPTIONS = {
  callbackURL: "/auth/google/callback",
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log("Google Profile ", profile);
  done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

const PORT = 5000;

app.use(cors());

app.use(passport.initialize());

app.get("/failure", (req, res) => {
  console.log("failed to loggedIn!!");
});

app.get("/", (req, res) => {
  res.redirect("http://localhost:5173");
});

app.get("/success", (req, res) => {
  res.status(200).send("login successful!!");
});

app.get("/auth/google", passport.authenticate("google", { scope: ["email"] }));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    session: false // Disable session since we're using tokens
  }),
  (req, res) => {
    // This function will only execute upon successful authentication
    console.log("Google authentication successful!");
    res.redirect("http://localhost:5173/HomePage"); // Redirect to the success route
  }
);


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
