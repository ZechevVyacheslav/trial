import { Router } from 'express';
import { Request, Response } from 'express';

type todoType = {
    id: number;
    title: string;
};

export class ToDoController {
    public router: Router;
    private todos: Array<todoType>;

    constructor() {
        this.router = Router();
        this.todos = [
            { id: 1, title: 'Create server' },
            { id: 2, title: 'Create js library' },
            { id: 3, title: 'Create web client' },
        ];
        this.attachEndpoints();
    }

    private attachEndpoints() {
        this.router.get('/', (req: Request, res: Response) => {
            res.json(this.todos);
        });
    }
}
