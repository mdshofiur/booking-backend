import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routerAuth from "./routes/auth.js";
import routerHotel from "./routes/hotel.js";
import routerRoom from "./routes/room.js";
import routerUsers from "./routes/users.js";


const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();


// connect DB
 async function connectDB() {
    try {
       mongoose.connect(
         "mongodb+srv://testingDatabase:LmlkuPM6zWk6hdW5@cluster0.e7yhr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
         {
           useNewUrlParser: true,
           useUnifiedTopology: true
         }
      );
      console.log("DB is connected");
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
};


app.get("/", (req, res) => {
  res.send("Hello World");
});

 app.use(express.json());

// middleware
app.use("/api/auth", routerAuth);
app.use("/api/hotel", routerHotel);
app.use("/api/room", routerRoom);
app.use("/api/user", routerUsers);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
   connectDB();
});
