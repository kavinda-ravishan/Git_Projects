import { createStore } from "redux";
import reducer from "./reduser";

//in default export no need, import { reducer } from "./reducer";
const store = createStore(reducer);

export default store;
