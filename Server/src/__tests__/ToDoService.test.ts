import { ToDoService } from '../services/ToDoService';

let todoService: ToDoService;

// eslint-disable-next-line
let req: any;
// eslint-disable-next-line
let res: any;

beforeAll(() => {
    todoService = new ToDoService();
});

beforeEach(() => {
    res = {
        statusCode: 200,
        body: {},
        json: jest.fn((result) => {
            res.body = result;
            return res;
        }),
        // eslint-disable-next-line
    } as any;

    req = {
        body: {},
        params: {},
        query: {},
        // eslint-disable-next-line
    } as any;
});

describe('Testing todo service', () => {
    describe('Valid flow', () => {
        test('Getting initial todos', () => {
            todoService.get_all_todos(req, res);
            expect(res.statusCode).toBe(200);
            expect(res.body.length).toBe(3);
        });

        test('Adding new item is correct', () => {
            req.body = { task: 'New task' };
            todoService.add_todo(req, res);
            expect(res.statusCode).toBe(200);
            expect(res.body.length).toBe(4);
        });

        test('Deleting all todos is correct', () => {
            todoService.delete_all_todos(req, res);
            expect(res.statusCode).toBe(200);
            expect(res.body.length).toBe(0);
        })
    });
});
