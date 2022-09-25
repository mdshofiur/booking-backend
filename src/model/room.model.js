import mongoose from "mongoose";
const { Schema } = mongoose;

const roomSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxpeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: [{ type: [Date] }] }],
  },
  {
    timestamps: true,
  }
);

// [
//     {number:101, unavailableDates:[01.05.2022, 1.01.2022]},
//     {number:102, unavailableDates:[]},
//     {number:103, unavailableDates:[]},
//     {number:104, unavailableDates:[]},
//     {number:105, unavailableDates:[]},
// ]

const SchemaRoom = mongoose.model("hotelroom", roomSchema);

export default SchemaRoom;
