import express from "express";
import SchemaHotel from "../model/hotel.model.js";

const routerHotel = express.Router();

routerHotel.post("/", async function (req, res) {
  const newModel = new SchemaHotel(req.body);
  try {
      const saveHotel = await newModel.save();
    res.status(200).json(saveHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default routerHotel;
