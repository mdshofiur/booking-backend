import express from "express";
import { getallUser, getUserById, UserdeleteById, UserupdateById } from "../controller/users.controller.js";
import { verifyAdmin, Tokenverify, verifyUser } from "../utils/verifyToken.js";

const routerUsers = express.Router();

routerUsers.get("/check", Tokenverify, (req, res, next) => {
  res.send(" verifyToken is ok");
});

routerUsers.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send(" verify User is ok");
});

routerUsers.get("/checkAdmin/:id", verifyAdmin);




routerUsers.get("/", verifyAdmin, getallUser);

routerUsers.get("/:id", verifyUser, getUserById);

routerUsers.put("/:id", verifyUser, UserupdateById);

routerUsers.delete("/:id",verifyUser, UserdeleteById);


export default routerUsers;
