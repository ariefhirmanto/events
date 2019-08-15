import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";

import {EventController} from "./controller/EventController";

createConnection().then(async connection => {
    const eventController = new EventController();
    const app = express();
    app.use(bodyParser.json());

    
    app.post("/events", eventController.eventSaveAction);
    app.get("/events", eventController.eventGetAllAction);
    app.get("/events/:id", eventController.eventGetByIdAction);
    
    app.listen(3000);
    console.log("Express application is up and running on port 3000");
}).catch(error => console.log("TypeORM connection error: ", error));
