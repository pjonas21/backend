import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://pjonas21:pjas@clusterhero.nlx6sgp.mongodb.net/hero-tickets"
    );
    // console.log("connected to database");
  } catch (error) {
    console.log('🚀 ~ file: database.ts:5 ~ connect ~ error:', error);
  }
}
