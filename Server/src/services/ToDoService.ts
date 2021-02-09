import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import todoType from '../types/todo';
import generateInitialToDos from '../helpers/generator';

export class ToDoService {
    private todos: Array<todoType>;

    constructor() {
        this.todos = generateInitialToDos();
        this.get_all_todos = this.get_all_todos.bind(this);
        this.add_todo = this.add_todo.bind(this);
        this.edit_todo_title = this.edit_todo_title.bind(this);
        this.edit_todo_status = this.edit_todo_status.bind(this);
        this.delete_single_todo = this.delete_single_todo.bind(this);
        this.delete_all_todos = this.delete_all_todos.bind(this);
    }

    public get_all_todos(req: Request, res: Response): void {
        res.json(this.todos);
    }

    public add_todo(req: Request, res: Response): void {
        const { task }: { task: string } = req.body;
        this.todos = [
            ...this.todos,
            {
                id: uuidv4(),
                title: task,
                done: false,
            },
        ];
        res.json(this.todos);
    }

    public edit_todo_title(req: Request, res: Response): void {
        const { id, title }: { id: string; title: string } = req.body;

        // Todo: refactor
        const index = this.todos.findIndex((todo) => {
            if (todo.id === id) {
                return true;
            }
            return false;
        });
        if (index === -1) {
            res.json({ messsage: 'No element with given id' });
            return;
        }

        this.todos[index] = { ...this.todos[index], title };
        res.json(this.todos);
    }

    public edit_todo_status(req: Request, res: Response): void {
        const { id }: { id: string } = req.body;

        // Todo: refactor
        const index = this.todos.findIndex((todo) => {
            if (todo.id === id) {
                return true;
            }
            return false;
        });
        if (index === -1) {
            res.json({ messsage: 'No element with given id' });
            return;
        }

        const { done: todoState } = this.todos[index];

        this.todos[index] = {
            ...this.todos[index],
            done: todoState === true ? false : true,
        };
        res.json(this.todos);
    }

    public delete_single_todo(req: Request, res: Response): void {
        const id: string = req.params.id;
        this.todos = this.todos.filter((todo) => todo.id !== id);
        res.json(this.todos);
    }

    public delete_all_todos(req: Request, res: Response): void {
        this.todos = [];
        res.json(this.todos);
    }
}
