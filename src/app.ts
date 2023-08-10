import express, { Application } from "express";
import { connect } from "./infra/database";
import { errorMiddleware } from "./middleware/error.middleware";
import { EventRoutes } from "./routes/event.routes";

class App {
  public app: Application;
  private eventRoutes = new EventRoutes();

  constructor() {
    this.app = express();
    this.middlewaresInitialize();
    this.initializeRoutes();
    this.interceptionError();
  }

  private initializeRoutes() {
    this.app.use("/events", this.eventRoutes.router);
  }

  private interceptionError() {
    this.app.use(errorMiddleware);
  }

  private middlewaresInitialize() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    connect().then(() => console.log('Database connected.'));
  }

  listen() {
    this.app.listen(3333, () => console.log("server is running"));
  }
}

export { App };
