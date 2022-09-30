import SchemaHotel from "../model/hotel.model.js";
import SchemaRoom from "../model/room.model.js";

export async function createHotel(req, res) {
  const newModel = new SchemaHotel(req.body);
  try {
    const saveHotel = await newModel.save();
    res.status(200).json(saveHotel);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getallhotel(req, res, next) {

  const { min, max, ...others } = req.query;

  try {
    const updateData = await SchemaHotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999999 },
    }).limit(req.query.limit);
    res.status(200).json(updateData);
  } catch (err) {
    next(err);
  }
}

export async function getById(req, res) {
  try {
    const getDataById = await SchemaHotel.findById(req.params.id);
    res.status(200).json(getDataById);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function updateById(req, res) {
  const filter = req.params.id;
  const update = req.body;

  try {
    const updateData = await SchemaHotel.findByIdAndUpdate(
      filter,
      { $set: update },
      {
        new: true,
        upsert: true,
      }
    );
    res.status(200).json(updateData);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function deleteById(req, res) {
  const filter = req.params.id;

  try {
    const updateData = await SchemaHotel.findOneAndDelete(filter);
    res.status(200).json(updateData);
  } catch (err) {
    res.status(500).json(err);
  }
}

// query using split
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((cityname) => {
        return SchemaHotel.countDocuments({ city: cityname });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export async function countByType(req, res, next) {
  try {
    const hotelCount = await SchemaHotel.countDocuments({ type: "hotel" });
    const apartmentCount = await SchemaHotel.countDocuments({
      type: "apartment",
    });
    const resortCount = await SchemaHotel.countDocuments({ type: "resort" });
    const cabinCount = await SchemaHotel.countDocuments({ type: "cabin" });
    const londonCount = await SchemaHotel.countDocuments({ type: "london" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resort", count: resortCount },
      { type: "cabin", count: cabinCount },
      { type: "london", count: londonCount },
    ]);
  } catch (err) {
    next(err);
  }
}

export async function  getHotelRooms(req, res, next) { 
  try {
    const hotel = await SchemaHotel.findById(req.params.id);
    const list = await Promise.all(hotel.rooms.map((room) => {
      return SchemaRoom.findById(room);
    })
    );
    return res.status(200).json(list);
  } catch (e) {
    next(e)
    // different between next(err) and console.log(e);
    }
}