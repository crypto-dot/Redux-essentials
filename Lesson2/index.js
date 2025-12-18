import {compose, createStore, bindActionCreators} from "Redux";

const initialState = {value: 0};
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD = "ADD";
// meta and error are also properties that can be on reducer actions
const incrementAction = () => ({type: INCREMENT});
const decrementAction =() => ({type: DECREMENT});
// it's commonly accepted to create actions using a function that abstracts the need to constantly re-write the object over and over again allowing for easy refactors 
const addAction = payload => ({type: ADD, payload});

const reducer = (state = initialState, action) => {
    if(action.type === INCREMENT) {
        return {...state, value: state.value + 1};
    }
    if(action.type === ADD) {
        return {...state, value: state.value + action.payload};
    }
    if(action.type === DECREMENT) {
        return {...state, value: state.value - 1};
    }
    return state;
}

// note createStore has been depecreated to encourage usage of configureStore from redux tool kit that provides defaults, I left it 
// in to learn Redux basics and develop an understanding of the lower 
// level Redux APIs

const store = createStore(reducer);
const subscriber = () => console.log("SUBSCRIBER", store.getState());
store.subscribe(subscriber);

// bind action creators allows us to shorthand the dispatch to simply do this:
const actions = bindActionCreators(incrementAction, decrementAction, addAction);
console.log(actions);
incrementAction();
decrementAction();
addAction();
// instead of 
// store.dispatch(incrementAction());
// store.dispatch(decrementAction());
// store.dispatch(addAction(10));