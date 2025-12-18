import {createStore, combineReducers} from "redux";

const users = [    
    {id: 1, name: "bob"},
    {id: 2, name: "tom"},
    {id: 3, name: "charles"},
    {id: 4, name: "peter"}
];

const tasks = [
    {title: "File TPS reports"},
    {title: "Order more energy drinks"}
]

const initalState = {
    users,
    tasks
}
const ADD_TASK = "ADD_TASK";
const ADD_USER = "ADD_USER";

const addTask = title => ({type: ADD_TASK, payload: {title}});
const addUser = name => ({type: ADD_USER, payload: {name}});

// instead of the below reducer which is needlessly verbose we can use combineReducers to simplify things
const verbose_reducer = (state = initalState, action) => {
    switch(action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        default:
            return state;
    }
}
// as such:
const userReducer = (state = initalState.users, action) => {
    switch(action.type) {
        case ADD_USER:
            return [...state, action.payload];
        default:
            return state;
    }
}
const Taskreducer = (state = initalState.tasks, action) => {
    switch(action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        default:
            return state;
    }
}

const reducer = combineReducers({tasks: Taskreducer, users: userReducer});

const store = createStore(reducer, initalState);
console.log(store.getState());