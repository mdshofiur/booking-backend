import express from "express";
import { countByCity, createHotel, deleteById, getallhotel, getById, updateById } from "../controller/hotel.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const routerHotel = express.Router();


routerHotel.post("/", verifyAdmin, createHotel);

routerHotel.get("/", getallhotel);

routerHotel.get("/:id", getById);

routerHotel.put("/:id", verifyAdmin, updateById);

routerHotel.delete("/:id", verifyAdmin, deleteById);

routerHotel.get("/query/countByCity", verifyAdmin, countByCity);

routerHotel.get("/query/countByType", verifyAdmin, getallhotel);




export default routerHotel;
