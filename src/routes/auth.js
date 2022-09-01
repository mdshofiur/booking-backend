import express from 'express';

const routerAuth = express.Router();

routerAuth.get("/", function (req, res, next) {
  res.send("Hello, world! from auth route");
});

// router.get("/register", function (req, res, next) {
//   res.send("Hello, world! from auth register");
// });

export default routerAuth;