import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://<usrname>:<pass>@clusterhero.nlx6sgp.mongodb.net/hero"
    );
    // console.log("connected to database");
  } catch (error) {
    console.log('🚀 ~ file: database.ts:5 ~ connect ~ error:', error);
  }
}
