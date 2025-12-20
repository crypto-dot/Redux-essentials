import {createSlice, createAction, nanoid} from "@reduxjs/toolkit";

export const createTask = (title) => ({
    id: nanoid(),
    title,
    completed: false, 
    assignedTo: ""
});

const initialState = [
    createTask("Hello world"),
    createTask("Buy Energy drinks")
];

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(createTask(action.payload))
        },
        toggle: (state, action) => {
            const task = state.find(task => task.id === action.payload.id);
            task.completed = action.payload.completed;
        },
        assignTo: (state, action) => {
            console.log(action.payload);
            const task = state.find(elm => elm.id == action.payload.taskId);
            task.assignedTo = action.payload.humanId;
        }
    }
});

export const toggleTask = createAction("tasks/toggle", (id, completed) => ({
    payload: {id, completed}
}));

export const assignTo = createAction("tasks/assignTo", (taskId, humanId) => ({
    payload: {taskId, humanId}
}));