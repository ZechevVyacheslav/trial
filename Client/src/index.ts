type todoType = {
    id: string;
    title: string;
    done: boolean;
};

class Client {
    private baseUrl = 'http:localhost:3000/to-do';
    public todos: Array<todoType>;

    constructor() {
        this.todos = [];
        this.getToDos();
    }

    getToDos(): void {
        fetch(`${this.baseUrl}`)
            .then((response) => response.json())
            .then((data) => {
                this.todos = data;
            });
    }

    addToDo(task: string): void {
        fetch(`${this.baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task }),
        })
            .then((response) => response.json())
            .then((data) => {
                this.todos = data;
            });
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const client = new Client();
