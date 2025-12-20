import {createSlice, nanoid} from "@reduxjs/toolkit";
import {taskSlice} from "./taskSlice.js";
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
    },
    extraReducers: (builder) => {
        builder.addCase(taskSlice.actions.assignTo, (state,action) => {
            for(const human of state) {
                if(human.id === action.payload.humanId) {
                    human.taskIds.push(action.payload.taskId);
                }
                else {
                    human.taskIds = human.taskIds.filter(id => id !== action.payload.taskId);
                }
            }
        })
    }
})