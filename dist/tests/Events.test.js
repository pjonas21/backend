"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const supertest_1 = __importDefault(require("supertest"));
const app = new app_1.App();
const express = app.app;
describe("Event test", () => {
    it("/POST Event", async () => {
        const event = {
            title: "Filme - VF 10",
            price: [{ sector: "Pista", amount: "20" }],
            description: "Evento descricao",
            city: "Fortaleza",
            location: {
                latitude: "-3.755627",
                longitude: "-38.488386",
            },
            cupons: [],
            date: new Date(),
            participants: [],
        };
        const response = await (0, supertest_1.default)(express)
            .post("/events")
            .field("title", event.title)
            .field("description", event.description)
            .field("city", event.city)
            .field("cupons", event.cupons)
            .field("location[latitude]", event.location.latitude)
            .field("location[longitude]", event.location.longitude)
            .field("price[sector]", event.price[0].sector)
            .field("price[amount]", event.price[0].amount)
            .field("price[sector]", event.price[0].sector);
        // .attach('banner', 'D:\\Downloads\\vf10.jpeg')
        // .attach('flyers', 'D:\Downloads\flyer1-vf10.png')
        expect(response.status).toBe(201);
        expect(response.body).toEqual({ message: "Evento criado." });
    });
});
