import {combineReducers, createStore} from "redux";
import MarketReducer from "./MarketReducer";
import ProfileReducer from "./ProfileReducer";


let reducers = combineReducers({
    marketPage: MarketReducer,
    profilePage: ProfileReducer
});

let store = createStore(reducers);
export default store;