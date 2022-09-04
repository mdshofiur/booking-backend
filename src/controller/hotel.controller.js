import SchemaHotel from "../model/hotel.model.js";


export async function createHotel(req, res) {
     const newModel = new SchemaHotel(req.body);
     try {
       const saveHotel = await newModel.save();
       res.status(200).json(saveHotel);
     } catch (err) {
       res.status(500).json(err);
     }
}

export async function getallhotel(req, res) {
  try {
    const updateData = await SchemaHotel.find();
    res.status(200).json(updateData);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getById(req, res) {
  const filter = req.params.id;
  try {
    const getDataById = await SchemaHotel.findById(filter);
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


export async function countByType() {}
