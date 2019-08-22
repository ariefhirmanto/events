import {Request, Response} from "express";
import {getManager, Repository} from "typeorm";
import {Event} from "../entity/Event";

export class EventController {

    eventRepository: Repository<Event>;

    constructor() {
        this.eventRepository = getManager().getRepository(Event);
    }

    async eventGetByIdAction(request: Request, response: Response) {
        const event = await this.eventRepository.findOne(request.params.id);

        if (!event) {
            response.status(404);
            response.end();
            return;
        }

        response.send(event);
    }

    async eventGetAllAction(request: Request, response: Response) {
        const events = await this.eventRepository.find();
        response.send(events);
    }

    async eventSaveAction(request: Request, response: Response) {

        // get a post repository to perform operations with post
        const eventRepository = getManager().getRepository(Event);
    
        // create a real post object from post json object sent over http
        const newEvent = eventRepository.create(request.body);
    
        // save received post
        await eventRepository.save(newEvent);
    
        // return saved post back
        response.send(newEvent);
    }

}
