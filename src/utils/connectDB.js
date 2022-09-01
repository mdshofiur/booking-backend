import mongoose from "mongoose";

export async function connectDB() {
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



