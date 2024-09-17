import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://husainmdamir786:AG8j9SEwRt4X9SI5@cluster0.20woibd.mongodb.net/food-del"
    )
    .then(() => console.log("db connected successfully"));
};
