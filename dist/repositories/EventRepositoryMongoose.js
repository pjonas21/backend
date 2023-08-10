"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRepositoryMongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const eventSchema = new mongoose_1.default.Schema({
    title: String,
    location: {
        latitude: String,
        longitude: String
    },
    date: Date,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    description: String,
    categories: [String],
    banner: String,
    flyers: [String],
    price: {
        type: Array,
    },
    city: String,
    participants: {
        type: Array,
        ref: "User",
    }
});
const EventModel = mongoose_1.default.model('Event', eventSchema);
class EventRepositoryMongoose {
    async add(event) {
        const eventModel = new EventModel(event);
        await eventModel.save();
        return event;
    }
}
exports.EventRepositoryMongoose = EventRepositoryMongoose;
