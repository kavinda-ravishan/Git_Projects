import store from "./store";

const unSubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState());
});

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug 1",
  },
});

//bugRemoved not going to notify
unSubscribe();

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});

console.log(store.getState());
