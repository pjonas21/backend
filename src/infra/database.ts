import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect('mongodb+srv://username:pass@clusterhero.nlx6sgp.mongodb.net/hero-tickets')
        console.log('connected to database')
    } catch (error) {
        console.log("file databe error: ", error)
    }
}