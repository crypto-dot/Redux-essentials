import {createSlice, nanoid} from "@reduxjs/toolkit";
import {createTask} from "./taskSlice";
function createHuman(name) {
    return {
        name,
        id: nanoid(),
        taskIds: []
    }
}

const initialState = [
    createHuman("Charles"),
    createHuman("Bob")
]

export const humanSlice = createSlice({
    name: "humans",
    initialState,
    reducers: {
        add:(state, action) => {
            state.push(createHuman(action.payload));
        }
    }
})