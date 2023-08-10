"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
async function connect() {
    try {
        await mongoose_1.default.connect("mongodb+srv://pjonas21:pjas@clusterhero.nlx6sgp.mongodb.net/hero-tickets");
        console.log("connected to database");
    }
    catch (error) {
        console.log("file databe error: ", error);
    }
}
exports.connect = connect;
