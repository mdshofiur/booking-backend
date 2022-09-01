import mongoose from "mongoose";
const { Schema } = mongoose;

 const hotelSchema = new Schema(
   {
     name: {
       type: String,
       required: true,
     },
     type: {
       type: String,
       required: true,
     },
     city: {
       type: String,
       required: true,
     },
     address: {
       type: String,
       required: true,
     },
     distance: {
       type: String,
       required: true,
     },
     photos: {
       type: String,
       required: true,
     },
     ratings: {
       type: Number,
       required: true,
       min: 0,
       max: 5,
     },
     rooms: {
       type: [String],
     },
     cheapestPrice: {
       type: Number,
       required: true,
     },
     featured: {
       type: Boolean,
       default: false,
     },
   },
   {
     timestamps: true,
   }
 );


const SchemaHotel = mongoose.model("hotel", hotelSchema);

export default SchemaHotel;
