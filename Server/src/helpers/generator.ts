import { v4 as uuidv4 } from 'uuid';
import todoType from '../types/todo';

const generateInitialToDos = (): Array<todoType> => {
    return [
        { id: uuidv4(), title: 'Create server', done: false },
        {
            id: uuidv4(),
            title: 'Create js library',
            done: false,
        },
        {
            id: uuidv4(),
            title: 'Create web client',
            done: false,
        },
    ];
}

export default generateInitialToDos;