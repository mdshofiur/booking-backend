import express from "express";
import {
  updateRoomAvailability,
  createRoom,
  deleteByIdRoom,
  getallRoom,
  getByIdRoom,
  updateByIdRoom,
} from "../controller/room.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const routerRoom = express.Router();


routerRoom.post("/:hotelId", createRoom);

routerRoom.get("/", getallRoom);

routerRoom.get("/:id", getByIdRoom);

routerRoom.put("/:roomid/:hotelId", updateByIdRoom);

routerRoom.delete("/:roomid/:hotelId", deleteByIdRoom);

routerRoom.put("/availability/update/:id", updateRoomAvailability);

// routerRoom.delete("/:roomId/:roomNumber", verifyAdmin, deleteByIdRoomNumber);


export default routerRoom;
