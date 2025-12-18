import { useAction } from "./useAction";
import { increment, decrement, set } from "../actions/actions";
import { useSelector } from "react-redux";
import type { State } from "../reducers/reducer";
export function useCounter() {
    const actions = useAction({increment, decrement, set});
    const counter = useSelector((store: State) => store.count);
    return {count: counter, ...actions};
}