import express from "express";
import dotenv from "dotenv";
import mongoose  from "mongoose";


const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.process.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
       throw error;
    }
}


mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
})

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
})


app.get("/", (req, res) => {
    res.send("Hello World");
})





app.listen(4000, () => { 
    console.log("Server is running on port 3000");
});