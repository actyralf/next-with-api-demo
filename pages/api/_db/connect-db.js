import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }

  // Use new db connection
  console.log("Connection String:", process.env.MONGO_DB_URI);

  await mongoose.connect(process.env.MONGO_DB_URI);
  return handler(req, res);
};

export default connectDB;
