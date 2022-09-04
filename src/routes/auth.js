import express from 'express';
import { createUsers, loginUser } from '../controller/auth.controller.js';

const routerAuth = express.Router();

// routerAuth.get("/", function (req, res, next) {
//   res.send("Hello, world! from auth route");
// });


routerAuth.post("/register", createUsers);

routerAuth.post("/login", loginUser);

export default routerAuth;