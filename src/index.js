import store from "./store";
//import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";
import * as actions from "./actions";

const unSubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState());
});

store.dispatch(actions.bugAdded("bug 1"));

//bugRemoved not going to notify
//unSubscribe();
store.dispatch(actions.bugResolved(1));

store.dispatch(actions.bugRemoved(1));

console.log(store.getState());
