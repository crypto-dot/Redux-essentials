import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useMemo } from "react";
export function useAction(actions: any) {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
}