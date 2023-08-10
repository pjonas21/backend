"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const database_1 = require("./infra/database");
const error_middleware_1 = require("./middleware/error.middleware");
const event_routes_1 = require("./routes/event.routes");
class App {
    constructor() {
        this.eventRoutes = new event_routes_1.EventRoutes();
        this.app = (0, express_1.default)();
        this.middlewaresInitialize();
        this.initializeRoutes();
        this.interceptionError();
        (0, database_1.connect)();
    }
    initializeRoutes() {
        this.app.use("/events", this.eventRoutes.router);
    }
    interceptionError() {
        this.app.use(error_middleware_1.errorMiddleware);
    }
    middlewaresInitialize() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    listen() {
        this.app.listen(3333, () => console.log("server is running"));
    }
}
exports.App = App;
