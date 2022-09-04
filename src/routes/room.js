import express from "express";
import { createRoom, deleteByIdRoom, getallRoom, getByIdRoom, updateByIdRoom } from "../controller/room.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const routerRoom = express.Router();


routerRoom.post("/:hotelId", verifyAdmin, createRoom);

routerRoom.get("/", getallRoom);

routerRoom.get("/:id", getByIdRoom);

routerRoom.put("/:roomid/:hotelId", verifyAdmin, updateByIdRoom);

routerRoom.delete("/:roomid/:hotelId", verifyAdmin, deleteByIdRoom);

// routerRoom.delete("/:roomId/:roomNumber", verifyAdmin, deleteByIdRoomNumber);


export default routerRoom;
