import express from "express";

const routerUsers = express.Router();

routerUsers.get("/", function (req, res, next) {
  res.send("users route");
});

export default routerUsers;
