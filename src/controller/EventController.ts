import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Event} from "../entity/Event";

export class EventController {
    async eventGetByIdAction(request: Request, response: Response) {

        // get a post repository to perform operations with post
        const eventRepository = getManager().getRepository(Event);
    
        // load a post by a given post id
        const event = await eventRepository.findOne(request.params.id);
    
        // if post was not found return 404 to the client
        if (!event) {
            response.status(404);
            response.end();
            return;
        }
    
        // return loaded post
        response.send(event);
    }

    async eventGetAllAction(request: Request, response: Response) {

        // get a post repository to perform operations with post
        const eventRepository = getManager().getRepository(Event);
    
        // load a post by a given post id
        const events = await eventRepository.find();
    
        // return loaded posts
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
