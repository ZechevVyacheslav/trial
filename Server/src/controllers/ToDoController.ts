import { Router } from 'express';
import { ToDoService } from '../services/ToDoService';

export class ToDoController {
    public router: Router;
    private todoService: ToDoService;

    constructor() {
        this.router = Router();
        this.todoService = new ToDoService();
        this.attachEndpoints();
    }

    private attachEndpoints() {
        this.router.get('/', this.todoService.get_all_todos);

        this.router.post('/', this.todoService.add_todo);

        this.router.patch('/title', this.todoService.edit_todo_title);

        this.router.patch('/done', this.todoService.edit_todo_status);

        this.router.delete('/:id', this.todoService.delete_single_todo);

        this.router.delete('/', this.todoService.delete_all_todos);
    }
}
