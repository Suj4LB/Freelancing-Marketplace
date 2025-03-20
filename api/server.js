import mongoose from "mongoose";
import express from "express";

const app = express();
mongoose.set('strictQuery', true);

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://projectdb:projectdb@cluster0.akcf7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Connection with mongoDB is successful! ");
    } catch (error) {
        console.log(error);
    }
}

// yarn run dev

// @21:35

// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// app.use(express.json());
// app.use(cookieParser());

// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || "Something went wrong!";

//   return res.status(errorStatus).send(errorMessage);
// });

app.listen(8800, () => {
  connect();
  console.log("Backend server is running!");
});
