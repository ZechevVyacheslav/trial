import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ToDoController } from '../controllers/ToDoController';

class App {
    private static instance: Express;
    private todoController: ToDoController;

    private constructor() {
        App.instance = express();
        this.todoController = new ToDoController();
        this.set_config();
    }

    public static getApp(): Express {
        if (!App.instance) {
            new App();
        }
        return App.instance;
    }

    private set_config() {
        // Middlewares
        App.instance.use(bodyParser.json({ limit: '50mb' }));
        App.instance.use(
            bodyParser.urlencoded({ limit: '50mb', extended: true })
        );
        App.instance.use(cors());

        // Routes
        App.instance.use('/to-do', this.todoController.router);
    }
}

export default App;
