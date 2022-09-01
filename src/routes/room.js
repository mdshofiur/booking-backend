import express from "express";

const routerRoom = express.Router();

routerRoom.get("/", function (req, res, next) {
  res.send("room route");
});


export default routerRoom;
