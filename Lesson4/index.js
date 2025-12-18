import {createStore, compose, bindActionCreators} from "redux";

const INITIAL_STATE = {value: 0}
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const INCREMENT_ACTION = () => ({type: INCREMENT});
const DECREMENT_ACTION = () => ({type: DECREMENT});

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case INCREMENT:
            return {value: state.value + 1};
        case DECREMENT:
            return {value: state.value - 1};
        default:
            return state;
    }
}
// enhancers curry the createStore function allowing you to perform actions before the actual createStore function is called
const monitorEnhancer =  (createStore) => (reducer, initalState = INITIAL_STATE) => {
    // here we wrap our reducer function with a monitor reducer function to get the performance metrics
    const monitoredReducer = (state,action) => {
        const start = performance.now();
        const newState = reducer(state,action);
        const end = performance.now();
        const diff = end - start;
        console.log(diff);
        // we need to ensure that the monitoredreducer returns the state from our wrapped reducer when called
        return newState;
    }
    return createStore(monitoredReducer, initalState);
}

const logStateEnhancer = (createStore) => (reducer, initalState = INITIAL_STATE) => {

    const logReducer = (state,action) => {
        // log the old state - use JSON to create a snapshot
        console.log("Old State",state, action);  
        const newState = reducer(state, action);
        console.log("Old State", newState, action);         
        return newState;
    }

    return createStore(logReducer, initalState);
}
const store = createStore(reducer, compose(logStateEnhancer, monitorEnhancer));

const actions = bindActionCreators({INCREMENT_ACTION, DECREMENT_ACTION}, store.dispatch);
actions.DECREMENT_ACTION();
actions.DECREMENT_ACTION();