import SchemaHotel from "../model/hotel.model.js";
import SchemaRoom from "../model/room.model.js";


export const createRoom = async (req, res, next) => { 

    const hotelId = req.params.hotelId;
    const newRoom = new SchemaRoom(req.body);

    try {
        const saveRoom = await newRoom.save();
        try {
            await SchemaHotel.findByIdAndUpdate(hotelId, {$push: {rooms: saveRoom._id} });
        } catch (e) {
            next(e);
        }
        res.status(200).json({ saveRoom });
    } catch (err) {
        next(err)
    }
}

export async function getallRoom(req, res) {
  try {
    const updateData = await SchemaRoom.find(req.params.hotelId);
    res.status(200).json(updateData);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getByIdRoom(req, res) {
  const filter = req.params.id;
  try {
    const getDataById = await SchemaRoom.findById(filter);
    res.status(200).json(getDataById);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function updateByIdRoom(req, res) {

  const hotelId = req.params.hotelId;
  const roomId = req.params.roomid;
  const update = req.body
  
    try {
      await SchemaRoom.findByIdAndUpdate(
        roomId,
        { $set: update },
        {
          new: true,
          upsert: true,
        }
      );
      try {
        await SchemaHotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.roomId },
        });
      } catch (e) {
        next(e);
      }
      res.status(200).json("Room is updated successfully");
    } catch (err) {
      next(err);
  }
  
}

export async function deleteByIdRoom(req, res,next) {

  const hotelId = req.params.hotelId;

  try {
        await SchemaRoom.findByIdAndDelete(req.params.roomid);
       try {
         await SchemaHotel.findByIdAndUpdate(hotelId, {
           $pull: { rooms: req.params.roomid },
           new: true,
           upsert: true
         },
         );
       } catch (e) {
         next(e);
       }
       res.status(200).json("Room is deleted 11");
     } catch (err) {
       next(err);
  }
  
}


// export async function deleteByIdRoomNumber(req, res, next) {

//   const roomId = req.params.roomId;

//   console.log(req.params.roomId);
//   console.log(req.params.roomNumber);

//   try {
//     SchemaRoom.findByIdAndDelete({rooms: "req.params.roomNumber"});
//     try {
//       await SchemaRoom.findByIdAndUpdate(roomId, {
//         $pull: { rooms: req.params.roomNumber },
//         new: true,
//         upsert: true,
//       });
//     } catch (e) {
//       next(e);
//     }

//     res.status(200).json("deleted")
//   } catch (err) {
//     next(err);
//   }
// }
