"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
class Event {
    constructor(title, location, date, description, banner, flyers, cupons, participants, price, city) {
        this.title = title;
        this.location = location;
        this.date = date;
        this.description = description;
        this.banner = banner;
        this.flyers = flyers;
        this.cupons = cupons;
        this.participants = participants;
        this.price = price;
        this.city = city;
    }
}
exports.Event = Event;
