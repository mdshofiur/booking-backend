import express from "express";
import { countByCity, countByType, createHotel, deleteById, getallhotel, getById, getHotelRooms, updateById } from "../controller/hotel.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const routerHotel = express.Router();


routerHotel.post("/", verifyAdmin, createHotel);

routerHotel.get("/", getallhotel);

routerHotel.get("/:id", getById);

routerHotel.put("/:id", verifyAdmin, updateById);

routerHotel.delete("/:id", verifyAdmin, deleteById);

routerHotel.get("/query/countByCity", countByCity);

routerHotel.get("/query/countByType", countByType);

routerHotel.get("/room/:id", getHotelRooms);




export default routerHotel;
