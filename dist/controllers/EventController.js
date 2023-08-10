"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
class EventController {
    constructor(eventUseCase) {
        this.eventUseCase = eventUseCase;
    }
    async create(request, response, next) {
        const eventData = request.body;
        try {
            const createEvent = await this.eventUseCase.create(eventData);
            return response.status(201).json({ message: 'Evento criado.' });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.EventController = EventController;
