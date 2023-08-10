"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRoutes = void 0;
const express_1 = require("express");
const EventRepositoryMongoose_1 = require("../repositories/EventRepositoryMongoose");
const EventController_1 = require("../controllers/EventController");
const EventUseCase_1 = require("../useCases/EventUseCase");
class EventRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        const eventRepository = new EventRepositoryMongoose_1.EventRepositoryMongoose();
        const eventUseCase = new EventUseCase_1.EventUseCase(eventRepository);
        this.eventController = new EventController_1.EventController(eventUseCase);
        this.initRoutes();
    }
    initRoutes() {
        this.router.post('/', this.eventController.create.bind(this.eventController));
    }
}
exports.EventRoutes = EventRoutes;
