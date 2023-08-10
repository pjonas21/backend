"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUseCase = void 0;
class EventUseCase {
    constructor(eventRepository) {
        this.eventRepository = eventRepository;
    }
    async create(eventData) {
        const result = await this.eventRepository.add(eventData);
        return result;
    }
}
exports.EventUseCase = EventUseCase;
