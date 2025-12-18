import { DECREMENT, INCREMENT, SET } from "../actions/actions";

export interface State {count: number};
export const initialState = {count: 55};

interface Action {
    type: string,
    payload?: number
}

export const reducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case INCREMENT:
            return {count: state.count + 1};
        case DECREMENT:
            return {count: state.count - 1};
        case SET:
            return {count: (action.payload ?? 0)}
        default:
            return state;
    }
}