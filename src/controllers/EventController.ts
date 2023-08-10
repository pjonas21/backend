import { NextFunction, Request, Response } from "express";
import { EventUseCase } from "../useCases/EventUseCase";
import { Event } from "../entities/Event";

class EventController {
  constructor(private eventUseCase: EventUseCase) {}

  async create(request: Request, response: Response, next: NextFunction) {
    const eventData: Event = request.body;
    console.log('event data: ', eventData);
    try {
      const createEvent = await this.eventUseCase.create(eventData);
      return response.status(201).json({ message: "Evento criado." });
    } catch (error) {
      next(error);
    }
  }
}

export { EventController };
